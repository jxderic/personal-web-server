/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 09:49:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-26 15:06:20
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
  status: String
});

export const TagSchema = new mongoose.Schema({
  name: String
});
