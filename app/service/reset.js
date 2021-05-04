'use strict';

const Service = require('egg').Service;

class ResetService extends Service {
  async index(useremail,telephone) {
    const{ctx}=this;
   

    let value =  await this.app.mysql.get('register', {
        useremail:useremail,
        telephone:telephone,
    });
    if(value){
        return value;
    }else{
        return '该用户不存在';
    }
  }
}

module.exports = ResetService;
