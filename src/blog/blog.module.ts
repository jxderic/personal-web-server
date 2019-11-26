/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 09:38:35
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 15:09:59
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TagService } from './tag.service';
import { BlogSchema, TagSchema } from './schemas/blog.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }])
  ],
  controllers: [BlogController],
  providers: [BlogService, TagService]
})
export class BlogModule {}
