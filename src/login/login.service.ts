/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 10:01:10
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-09-28 19:29:12
 * @Description: 登录服务
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto';
import { exec } from 'child_process'

@Injectable()
export class LoginService {
  constructor(@InjectModel('Login') private readonly loginModel: Model<LoginDto>) {}

  async findOne(username: string): Promise<LoginDto> {
    return await this.loginModel.findOne({ username: username });
  }

  async deploy() {
    const commands = `./deploy.sh`;
    return await exec(commands, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      }
      console.log(stdout + stderr);
    });
  }
}