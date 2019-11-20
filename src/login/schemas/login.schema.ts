/*
 * @Author: jinxiaodong
 * @Date: 2019-11-20 09:49:01
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-20 09:50:27
 * @Description: 登录数据
 */
import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  username: String,
  password: String
});
