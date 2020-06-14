/*
 * @Descripttion: 用户路由
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-06-14 20:42:47
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-06-14 22:02:32
 */ 
import { UserService } from './user.service';
import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  async store (@Body() data: UserDto) {
    return await this.userService.store(data)
  }
}
