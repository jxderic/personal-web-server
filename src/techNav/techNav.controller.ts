/*
 * @Date: 2019-09-28 15:49:05
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 17:29:19
 * @content: I
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { NavService } from './techNav.service';
import { CategoryService } from './category.service';
import { CreateNavDto, QueryNavDto, CreateCategoryDto } from './dto/index';

@Controller('eric-api' + '/nav')
@ApiUseTags('技术导航')
export class NavController {
  constructor(private readonly NavService: NavService, private readonly CategoryService: CategoryService) {}
  @Get()
  @ApiOperation({ title: '显示导航列表' })
  async index(@Query() queryNavdto: QueryNavDto) {
    let data = await this.NavService.findAll(queryNavdto)
    return {
      code: 200,
      msg: 'success',
      data: data
    }
  }

  @Get('getNavItem/:id')
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

  @Post('createCategory')
  @ApiOperation({ title: '增加一个导航分类' })
  async AddCategory(@Body() createCategoryDto: CreateCategoryDto) {
    await this.CategoryService.create(createCategoryDto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Get('getCategorys')
  @ApiOperation({ title: '获取导航分类列表' })
  async getCategorys() {
    let data = await this.CategoryService.findAll()
    return {
      code: 200,
      msg: 'success',
      data: {
        list: data
      }
    }
  }

  @Put('updateCategory/:id')
  @ApiOperation({ title: '更新类别' })
  async UpdateCategory(@Param('id') id: string, @Body() createCategoryDto: CreateCategoryDto) {
    await this.CategoryService.update(id, createCategoryDto)
    return {
      code: 200,
      msg: 'success'
    }
  }

  @Delete('deleteCategory/:id')
  @ApiOperation({ title: '删除类别' })
  async DeleteCategory(@Param('id') id: string) {
    await this.CategoryService.delete(id)
    return {
      code: 200,
      msg: 'success'
    }
  }
}
