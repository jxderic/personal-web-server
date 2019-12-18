/*
 * @Author: jinxiaodong
 * @Date: 2019-11-18 16:57:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-21 15:04:38
 * @Description: module入口
 */
import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { LoginModule } from './login/login.module';
import { NavModule } from './techNav/techNav.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogModule,
    LoginModule,
    NavModule,
    MongooseModule.forRoot('mongodb://localhost:27017/eric'),
  ],
})
export class AppModule {}
