/*
@Date: 2019/9/28 23:00  @Author: Asen Wang
@Contact Email: taiyangdexingxing@gmail.com
@content:
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
