/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 09:49:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-22 14:04:34
 * @Description: 登录数据
 */
import * as mongoose from 'mongoose';

export const NavSchema = new mongoose.Schema({
  title: String,
  summary: String,
  logo: String,
  url: String,
  category: String
});
