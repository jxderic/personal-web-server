/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 20:34:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 17:26:32
 * @Description: Nav service
 */
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/index';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel('Category') private readonly CategoryModel: Model<CreateCategoryDto>) {}

  async create(item: CreateCategoryDto): Promise<CreateCategoryDto> {
    const newItem = new this.CategoryModel(item);
    return await newItem.save();
  }

  async findAll() {
    return await this.CategoryModel.find({})
  }

  async update(id: string, item: CreateCategoryDto): Promise<CreateCategoryDto> {
    return await this.CategoryModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<CreateCategoryDto> {
    return await this.CategoryModel.findByIdAndRemove(id);
  }
}
