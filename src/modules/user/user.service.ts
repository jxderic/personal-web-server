/*
 * @Descripttion: 用户服务
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-06-14 20:43:28
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-06-14 22:00:48
 */ 
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async store(data: UserDto) {
    const entity = await this.userRepository.create(data)
    await this.userRepository.save(entity)
    return entity
  }
}
