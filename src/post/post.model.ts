/*
 * @Date: 2019-09-30 14:33:53
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-09-30 22:42:48
 * @content: I
 */
import {getModelForClass, prop} from '@typegoose/typegoose'

export class Post {
  @prop()
  title: string
  @prop()
  article: string
  @prop()
  content: string
}

export const PostModel = getModelForClass(Post)
