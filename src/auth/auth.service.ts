import { UserService } from './../easy-proxy/user/user.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as ldap from 'ldapjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly config: ConfigService
  ) {}

  async validateUser (username: string, pss: string): Promise<any> {
    const user = await this.userService.findOne(username)
    if (user && user.password === pss) {
      const { password, ...result } = user
      return result
    }
    return null
  }
  // 使用公司的ldap服务来校验用户名和密码
  async validate (username: string, pss: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!username || !pss) {
        return reject()
      }
      const client = ldap.createClient({
        url: this.config.get('LDAP_URL')
      })
      client.bind(username, pss, async err => {
        client.destroy();
        if (err) {
          return reject();
        }
        const user = await this.userService.findOne(username)
        if (user && user.password === pss) {
          const { username, _id } = user
          return resolve({
            username,
            _id
          })
        }
      })
    })
  }
}
