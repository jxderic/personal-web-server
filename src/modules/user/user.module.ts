/*
 * @Descripttion: 用户模块
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-06-14 20:42:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-06-14 21:47:10
 */ 
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
