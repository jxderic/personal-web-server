/*
 * @Descripttion: 
 * @version: 
 * @Author: jinxiaodong
 * @Date: 2020-06-14 20:47:52
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-06-14 21:40:44
 */ 
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
