'use strict';

const Service = require('egg').Service;

class ResetService extends Service {
  async index(useremail,telephone) {
    const{ctx}=this;
    console.log('service层连接成功');
    console.log(useremail);
    console.log(telephone);

    let value =  await this.app.mysql.get('register', {
        useremail:useremail,
        telephone:telephone,
    });
    if(value){
        console.log(value);
        return value;
    }else{
        console.log('该用户不存在');
        return '该用户不存在';
    }
  }
}

module.exports = ResetService;
