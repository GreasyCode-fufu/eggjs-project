'use strict';

const Service = require('egg').Service;

class UpdatepasswordService extends Service {
  async index(userpassword, verify) {
    const{ctx}=this;
    console.log("-----------------------------")
    console.log('service层连接成功');
    console.log(userpassword);
    console.log(verify);

    if(userpassword === verify){
        let result = await this.app.mysql.update('register',{
             userpassword:userpassword, 
             verify:verify 
            });
            console.log(result);
            return "密码更改成功，请前往登录！"
    }else{
        return "密码不一致，请从新输入！"
    }
  }

}

module.exports = UpdatepasswordService;
