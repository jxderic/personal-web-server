/*
 * @Author: jinxiaodong
 * @Date: 2019-12-18 22:14:02
 * @LastEditors  : jinxiaodong
 * @LastEditTime : 2020-01-05 17:55:41
 * @Description: 
 */
db.createUser({
  user: 'root',
  pwd: '123456',
  roles: [{
    role: 'readWrite',
    db: 'personWeb'
  }]
})