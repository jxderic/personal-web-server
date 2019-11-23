/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 09:49:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-23 11:42:03
 * @Description: 导航数据
 */
import * as mongoose from 'mongoose';

export const NavSchema = new mongoose.Schema({
  title: String,
  summary: String,
  logo: String,
  url: String,
  category: String
});

export const CategorySchema = new mongoose.Schema({
  name: String,
  icon: String
});
