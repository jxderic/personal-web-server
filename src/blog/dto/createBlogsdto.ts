/*
 * @Author: jinxiaodong
 * @Date: 2019-11-19 09:38:35
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-27 13:48:09
 * @Description:  blog元数据
 */

import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateBlogsDto {
  @ApiModelProperty({ description: '标题', example: ''})
  @IsNotEmpty({message: '请输入标题'})
  readonly title: string;

  @ApiModelProperty({ description: '摘要', example: '' })
  readonly summary: string;

  @ApiModelProperty({ description: '内容', example: '' })
  @IsString()
  readonly content: string;

  @ApiModelProperty({ description: '标签', example: [] })
  readonly tags: string[];

  @ApiModelProperty({ description: '日期', example: '' })
  readonly date: string;

  @ApiModelProperty({ description: '缩略图', example: '' })
  readonly thumbnail: string;

  @ApiModelProperty({ description: '状态', example: 'draft' })
  readonly status: string;
}
