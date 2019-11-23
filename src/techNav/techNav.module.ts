/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 09:38:35
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-23 11:47:36
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { NavController } from './techNav.controller';
import { NavService } from './techNav.service';
import { CategoryService } from './category.service';
import { NavSchema, CategorySchema } from './schemas/techNav.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Nav', schema: NavSchema }]),
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])
  ],
  controllers: [NavController],
  providers: [NavService, CategoryService]
})
export class NavModule {}
