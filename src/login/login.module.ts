/*
 * @Author: jinxiaodong
 * @Date: 2019-11-18 16:57:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 10:06:36
 * @Description: module入口
 */
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './schemas/login.schema';
import { LoginService } from './login.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Login', schema: LoginSchema }])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
