/*
@Date: 2019/9/28 23:00  @Author: Asen Wang
@Contact Email: taiyangdexingxing@gmail.com
@content:
*/
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiModelProperty({ description: '用户名', example: ''})
  @IsNotEmpty({message: '请输入用户名'})
  readonly username: string;

  @ApiModelProperty({ description: '密码', example: ''})
  @IsNotEmpty({message: '请输入密码'})
  readonly password: string;
}
