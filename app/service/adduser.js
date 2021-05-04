'use strict';

const Service = require('egg').Service;

class AdduserService extends Service {
  async index(useremail,userpassword,verify,telephone) {
    const{ctx}=this;
    if(verify){
        let result = await this.app.mysql.insert("register",{
            useremail:useremail,
            userpassword:userpassword,
            verify:verify,
            telephone:telephone
        });
        return "注册成功，请登录！"
    }else if(userpassword != verify){
        return "密码不一致，请从新输入!"
    }else{
      return "各输入框不能为空！"
    }
  }
}

module.exports = AdduserService;
