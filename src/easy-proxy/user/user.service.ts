import { LoginDto } from './../../login/dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Login') private readonly loginModel: Model<LoginDto>,
    private readonly jwtService: JwtService
  ) {}
  async findOne(username: string): Promise<any> {
    return await this.loginModel.findOne({ username });
  }

  async create(item: LoginDto): Promise<LoginDto> {
    const newItem = new this.loginModel(item);
    return await newItem.save();
  }

  async login (user:any) {
    const playload = { username: user.username, sub: user._id }
    return {
      access_token: this.jwtService.sign(playload)
    }
  }
}
