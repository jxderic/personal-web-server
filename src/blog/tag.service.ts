/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 20:34:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 15:34:22
 * @Description: tag service
 */
import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/index';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel('Tag') private readonly TagModel: Model<CreateTagDto>) {}

  async create(item: CreateTagDto): Promise<CreateTagDto> {
    const newItem = new this.TagModel(item);
    return await newItem.save();
  }

  async findAll() {
    return await this.TagModel.find({})
  }

  async update(id: string, item: CreateTagDto): Promise<CreateTagDto> {
    return await this.TagModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<CreateTagDto> {
    return await this.TagModel.findByIdAndRemove(id);
  }
}
