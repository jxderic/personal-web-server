/*
 * @Author: jinxiaodong
 * @Date: 2019-11-23 11:33:39
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 15:04:19
 * @Description: 技术导航类别
 */

import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class CreateTagDto {
  @ApiModelProperty({ description: '标签名称', example: ''})
  @IsNotEmpty({message: '请输入标签名称'})
  readonly name: string;
}
