/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 09:49:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-12-03 17:39:40
 * @Description: 登录数据
 */
import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  summary: String,
  content: String,
  tags: Array,
  date: String,
  thumbnail: String,
  status: String,
  starStatus: Number,
  category: String
});

export const TagSchema = new mongoose.Schema({
  name: String
});

export const CategorySchema = new mongoose.Schema({
  name: String
});
