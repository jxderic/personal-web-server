/*
 * @Date: 2019-09-28 15:49:05
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-22 18:44:07
 * @content: I
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { NavService } from './techNav.service';
import { CreateNavDto, QueryNavDto } from './dto/index';

@Controller('eric-api' + '/nav')
@ApiUseTags('技术导航')
export class NavController {
  constructor(private readonly NavService: NavService) {}
  @Get()
  @ApiOperation({ title: '显示导航列表' })
  async index(@Query() queryNavdto: QueryNavDto) {
    let data = await this.NavService.findAll(queryNavdto.title, parseInt(queryNavdto.page + ''), parseInt(queryNavdto.limit + ''))
    return {
      code: 200,
      msg: 'success',
      data: data
    }
  }

  @Get(':id')
  @ApiOperation({ title: '显示某一个导航' })
  async OneNav(@Param('id') id: string) {
    let NavItem = await this.NavService.findOne(id)
    return {
      code: 200,
      msg: 'success',
      data: {
        nav: NavItem
      }
    }
  }

  @Post()
  @ApiOperation({ title: '增加一个导航' })
  async AddNav(@Body() createNavdto: CreateNavDto) {
    await this.NavService.create(createNavdto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Put(':id')
  @ApiOperation({ title: '更新某导航' })
  async UpdateNav(@Param('id') id: string, @Body() updateNavdto: CreateNavDto) {
    await this.NavService.update(id, updateNavdto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '删除某导航' })
  async DeleteNav(@Param('id') id: string) {
    await this.NavService.delete(id)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Post('')
  @ApiOperation({ title: '增加一个导航' })
  async AddCategory(@Body() createNavdto: CreateNavDto) {
    await this.NavService.create(createNavdto)
    return {
      code: 200,
      msg: 'success'
    }
  }
}
