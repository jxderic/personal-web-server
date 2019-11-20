/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 10:01:10
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 10:38:18
 * @Description: 登录服务
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private readonly loginModel: Model<LoginDto>) {}

  async findOne(username: string): Promise<LoginDto> {
    return await this.loginModel.findOne({ username: username });
  }
}