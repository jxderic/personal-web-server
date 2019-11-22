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

  @ApiModelProperty({ description: '描述', example: '' })
  readonly summary: string;

  @ApiModelProperty({ description: 'logo', example: '' })
  @IsString()
  readonly logo: string;

  @ApiModelProperty({ description: '链接', example: '' })
  readonly url: string;

  @ApiModelProperty({ description: '类别', example: '' })
  readonly category: string;
}
