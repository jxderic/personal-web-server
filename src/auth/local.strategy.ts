import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate (username: string, pss: string): Promise<any> {
    try {
      const user = await this.authService.validate(username, pss)
      return user
    } catch (error) {
      throw new UnauthorizedException()
    }
  }
}
