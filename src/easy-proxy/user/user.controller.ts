import { UserService } from './user.service';
import { LoginDto } from './../../login/dto';
import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request as Req } from 'express';

@Controller()
@ApiUseTags('easy-proxy')
export class UserController {
  constructor (
    private readonly userService: UserService
  ) {}
  @Post('/signin')
  @ApiOperation({ title: '登录' })
  @UseGuards(AuthGuard('local'))
  public async signin (@Body() req1: LoginDto, @Request() req: Req) {
    const res = Object.assign({}, req.user, await this.userService.login(req.user))
    return {
      code: 200,
      data: res,
      msg: '登录成功'
    }
  }

  @Post('/createUser')
  @ApiOperation({ title: '添加用户' })
  @UseGuards(AuthGuard('jwt'))
  public async create (@Body() req: LoginDto) {
    await this.userService.create(req)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Post('/userInfo')
  @ApiOperation({ title: '获取用户信息' })
  @UseGuards(AuthGuard('jwt'))
  public async userInfo(@Request() req) {
    return {
      code: 200,
      data: req.user,
      msg: '登录成功'
    }
  }
}
