/*
 * @Author: jinxiaodong
 * @Date: 2019-11-21 14:54:36
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-21 15:01:00
 * @Description: 
 */
import { Test, TestingModule } from '@nestjs/testing';
import { NavController } from './techNav.controller';

describe('Blog Controller', () => {
  let controller: NavController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavController],
    }).compile();

    controller = module.get<NavController>(NavController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
