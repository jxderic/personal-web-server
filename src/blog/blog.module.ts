/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 09:38:35
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-12-03 17:32:15
 * @Description:
 */
import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TagService } from './tag.service';
import { CategoryService } from './cateGory.service';
import { BlogSchema, TagSchema, CategorySchema } from './schemas/blog.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }]),
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])
  ],
  controllers: [BlogController],
  providers: [BlogService, TagService, CategoryService]
})
export class BlogModule {}
