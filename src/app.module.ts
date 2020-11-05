/*
 * @Author: jinxiaodong
 * @Date: 2019-11-18 16:57:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-04 16:31:08
 * @Description: module入口
 */
import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { LoginModule } from './login/login.module';
import { NavModule } from './techNav/techNav.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EasyProxyModule } from './easy-proxy/easy-proxy.module';
import { RouterModule, Routes } from 'nest-router';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

const routes: Routes = [
  {
    path: '/eric-api',
    children: [
      {
        path: '/users',
        module: LoginModule,
      },
      {
        path: '/articles',
        module: BlogModule,
      },
      {
        path: '/nav',
        module: NavModule,
      },
      {
        path: '/easy-proxy',
        module: EasyProxyModule,
      },
    ],
  },
];

@Module({
  imports: [
    BlogModule,
    LoginModule,
    NavModule,
    // MongooseModule.forRoot('mongodb://root:123456@mongo:27017/personWeb'),
    MongooseModule.forRoot('mongodb://root:123456@127.0.0.1:27017/personWeb'),
    EasyProxyModule,
    RouterModule.forRoutes(routes),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ]
})
export class AppModule {}
