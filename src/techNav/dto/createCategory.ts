/*
 * @Author: jinxiaodong
 * @Date: 2019-11-23 11:33:39
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 20:19:03
 * @Description: 技术导航类别
 */

import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class CreateCategoryDto {
  @ApiModelProperty({ description: '类别名称', example: ''})
  @IsNotEmpty({message: '请输入类别名称'})
  readonly name: string;

  @ApiModelProperty({ description: '类别显示', example: '' })
  readonly label: string;

  @ApiModelProperty({ description: '图标', example: '' })
  readonly icon: string;
}
