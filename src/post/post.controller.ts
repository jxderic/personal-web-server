/*
 * @Date: 2019-09-28 15:49:05
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-09-30 22:39:50
 * @content: I
 */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dto';
import { PostModel } from './post.model';

@Controller('post')
@ApiUseTags('文章网站')
export class PostController {

  @Get()
  @ApiOperation({ title: '显示文章列表页面' })
  async index() {
    return await PostModel.find()
  }

  @Get(':id')
  @ApiOperation({ title: '显示某一篇文章' })
  async OnePost(@Param('id') id: string) {
    return await PostModel.findById(id)
  }

  @Post()
  @ApiOperation({ title: '增加一篇文章' })
  async AddPost(@Body() createpostdto: CreatePostsDto) {
    await PostModel.create(createpostdto)
    return {
      status: 'success',
      createpostdto
    }
  }

  @Put(':id')
  @ApiOperation({ title: '更新某文章' })
  async UpdatePost(@Param('id') id: string, @Body() updatepostdto: CreatePostsDto) {
    await PostModel.findOneAndUpdate(id, updatepostdto)
    return {
      updatepostdto
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '删除某文章' })
  async DeletePost(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id)
    return {
      msg: 'success'
    }
  }
}
