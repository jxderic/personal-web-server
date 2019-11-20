/*
 * @Date: 2019-09-28 15:49:05
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 14:23:59
 * @content: I
 */
import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { LoginDto } from './dto';
import 'dotenv/config'

@Controller('eric-api/users')
@ApiUseTags('登录')
export class  LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('/login')
  @ApiOperation({ title: '登录' })
  async login(@Body() loginParam: LoginDto) {
    let loginItem = await this.loginService.findOne(loginParam.username)
    console.log(loginItem)
    return {
      code: 200,
      msg: 'success',
      data: {
        accessToken: 'admin-token'
      }
    }
  }

  @Post('/info')
  @ApiOperation({ title: '获取用户信息' })
  async getUserInfo() {
    return {
      code: 200,
      msg: 'success',
      data: {
        user: {
          id: 0,
          username: 'admin',
          password: 'any',
          name: 'Super Admin',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          introduction: 'I am a super administrator',
          email: 'admin@test.com',
          phone: 1234567890,
          roles: [
            'admin'
          ]
        }
      }
    }
  }
}
