/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 20:34:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 19:49:36
 * @Description: blog service
 */
import { Injectable } from '@nestjs/common';
import { CreateBlogsDto } from './dto/index';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<CreateBlogsDto>) {}

  async findAll(title: string, page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    let model = await this.blogModel.find(title ? {title: title} : {}).skip(skip).limit(pageSize)
    return new Promise ((resolve, reject) => {
      this.blogModel.countDocuments({}, (err, count) => {
        resolve ({
          items: model,
          total: count
        })
      })
    })
  }

  async findOne(id: string): Promise<CreateBlogsDto> {
    return await this.blogModel.findOne({ _id: id });
  }

  async create(item: CreateBlogsDto): Promise<CreateBlogsDto> {
    const newItem = new this.blogModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<CreateBlogsDto> {
    return await this.blogModel.findByIdAndRemove(id);
  }

  async update(id: string, item: CreateBlogsDto): Promise<CreateBlogsDto> {
    return await this.blogModel.findByIdAndUpdate(id, item, { new: true });
  }
}
