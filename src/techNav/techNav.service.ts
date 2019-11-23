/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 20:34:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-23 11:44:42
 * @Description: Nav service
 */
import { Injectable } from '@nestjs/common';
import { CreateNavDto } from './dto/index';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NavService {
  constructor(@InjectModel('Nav') private readonly NavModel: Model<CreateNavDto>) {}

  async findAll(title: string, page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    const reg = new RegExp(title, 'i') // 模糊查询
    let model = await this.NavModel.find({title: {$regex: reg}}).skip(skip).limit(pageSize) // 分页查询
    return new Promise ((resolve, reject) => {
      this.NavModel.countDocuments({}, (err, count) => {
        resolve ({
          items: model,
          total: count
        })
      })
    })
  }

  async findOne(id: string): Promise<CreateNavDto> {
    return await this.NavModel.findOne({ _id: id });
  }

  async create(item: CreateNavDto): Promise<CreateNavDto> {
    const newItem = new this.NavModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<CreateNavDto> {
    return await this.NavModel.findByIdAndRemove(id);
  }

  async update(id: string, item: CreateNavDto): Promise<CreateNavDto> {
    return await this.NavModel.findByIdAndUpdate(id, item, { new: true });
  }
}
