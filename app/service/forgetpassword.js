'use strict';

const Service = require('egg').Service;

class ForgetpasswordService extends Service {
  async index(useremail, telephone) {
    console.log({useremail, telephone})

   let value =  await this.app.mysql.get('register', {
        useremail:useremail,
        telephone:telephone,
    })

    console.log(value);

    if (value){
        return value;
    }else{
        return "没有找到";
    }
  }
}

module.exports = ForgetpasswordService;
