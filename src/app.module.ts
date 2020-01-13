/*
 * @Author: jinxiaodong
 * @Date: 2019-11-18 16:57:12
 * @LastEditors  : jinxiaodong
 * @LastEditTime : 2020-01-12 20:18:30
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
    MongooseModule.forRoot('mongodb://root:123456@mongo:27017/personWeb'),
  ],
})
export class AppModule {}
