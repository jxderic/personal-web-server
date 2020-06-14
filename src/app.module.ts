/*
 * @Author: jinxiaodong
 * @Date: 2019-11-18 16:57:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-06-14 20:25:58
 * @Description: module入口
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
  ],
})
export class AppModule {}
