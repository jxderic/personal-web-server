/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 15:20:38
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 16:49:33
 * @Description: 
 */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';

export default class QueryBlogDto {
  @ApiModelProperty({ description: 'title', example: ''})
  readonly title: string;

  @ApiModelProperty({ description: 'statusName', example: ''})
  readonly statusName: string;

  @ApiModelProperty({ description: 'page', example: ''})
  @IsNotEmpty({message: '请输入页码'})
  readonly page: number;

  @ApiModelProperty({ description: 'limit', example: ''})
  @IsNotEmpty({message: '请输入一页多少条'})
  readonly limit: number;
}