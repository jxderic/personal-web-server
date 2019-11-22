/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 09:38:35
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 11:11:59
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { NavController } from './techNav.controller';
import { NavService } from './techNav.service';
import { NavSchema } from './schemas/techNav.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Nav', schema: NavSchema }])],
  controllers: [NavController],
  providers: [NavService]
})
export class NavModule {}
