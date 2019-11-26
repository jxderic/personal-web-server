/*
 * @Date: 2019-09-28 15:49:05
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 15:34:29
 * @content: I
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { TagService } from './tag.service';
import { CreateBlogsDto, QueryBlogDto, CreateTagDto } from './dto/index';

@Controller('eric-api' + '/articles')
@ApiUseTags('文章网站')
export class BlogController {
  constructor(private readonly blogService: BlogService, private readonly TagService: TagService) {}
  @Get()
  @ApiOperation({ title: '显示文章列表页面' })
  async index(@Query() queryBlogdto: QueryBlogDto) {
    let data = await this.blogService.findAll(queryBlogdto)
    return {
      code: 200,
      msg: 'success',
      data: data
    }
  }

  @Get('getItem/:id')
  @ApiOperation({ title: '显示某一篇文章' })
  async OneBlog(@Param('id') id: string) {
    let blogItem = await this.blogService.findOne(id)
    return {
      code: 200,
      msg: 'success',
      data: {
        article: blogItem
      }
    }
  }

  @Post()
  @ApiOperation({ title: '增加一篇文章' })
  async AddBlog(@Body() createBlogdto: CreateBlogsDto) {
    await this.blogService.create(createBlogdto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Put(':id')
  @ApiOperation({ title: '更新某文章' })
  async UpdateBlog(@Param('id') id: string, @Body() updateBlogdto: CreateBlogsDto) {
    await this.blogService.update(id, updateBlogdto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Delete('deleteItem/:id')
  @ApiOperation({ title: '删除某文章' })
  async DeleteBlog(@Param('id') id: string) {
    await this.blogService.delete(id)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Post('createTag')
  @ApiOperation({ title: '增加标签' })
  async AddTag(@Body() createTagDto: CreateTagDto) {
    await this.TagService.create(createTagDto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Put('updateTag/:id')
  @ApiOperation({ title: '更新标签' })
  async UpdateTag(@Param('id') id: string, @Body() createTagDto: CreateTagDto) {
    await this.TagService.update(id, createTagDto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Get('tags')
  @ApiOperation({ title: '获取标签列表' })
  async GetTags() {
    let data = await this.TagService.findAll()
    return {
      code: 200,
      msg: 'success',
      data: data
    }
  }

  @Delete('deleteTag/:id')
  @ApiOperation({ title: '删除某标签' })
  async DeleteTag(@Param('id') id: string) {
    await this.TagService.delete(id)
    return {
      code: 200,
      msg: 'success'
    }
  }
}
