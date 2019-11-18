/*
@Date: 2019/9/28 23:00  @Author: Asen Wang
@Contact Email: taiyangdexingxing@gmail.com
@content:
*/
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';

export class CreatePostsDto {
  @ApiModelProperty({ description: '标题', example: ''})
  @IsNotEmpty({message: '请输入标题'})
  readonly title: string;

  @ApiModelProperty({ description: '摘要', example: '摘要' })
  readonly article: string;

  @ApiModelProperty({ description: '内容', example: '' })
  @IsString()
  readonly content: string;
}
