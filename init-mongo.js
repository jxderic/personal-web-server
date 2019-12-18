/*
 * @Author: jinxiaodong
 * @Date: 2019-12-18 22:14:02
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-12-18 22:24:05
 * @Description: 
 */
db.createUser({
  user: 'root',
  pwd: '123456',
  roles: [{
    role: 'readWrite',
    db: 'nest'
  }]
})