/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 20:34:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-12-03 17:00:50
 * @Description: tag service
 */
import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/index';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly CategoryModel: Model<CreateTagDto>,
  ) {}

  async create(item: CreateTagDto): Promise<CreateTagDto> {
    const newItem = new this.CategoryModel(item);
    return await newItem.save();
  }

  async findAll() {
    return await this.CategoryModel.find({});
  }

  async update(id: string, item: CreateTagDto): Promise<CreateTagDto> {
    return await this.CategoryModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<CreateTagDto> {
    return await this.CategoryModel.findByIdAndRemove(id);
  }
}
