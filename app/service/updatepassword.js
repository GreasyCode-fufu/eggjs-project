'use strict';

const Service = require('egg').Service;
const PasswordHelper = require('../controller/password2');

class UpdatepasswordService extends Service {
  async index(userpassword, verify, useremail) {
    const{ctx}=this;
    console.log("-----------------------------")
    console.log('service层连接成功');
    console.log(userpassword);
    console.log(verify);
    let passwordHelper = new PasswordHelper();
    let hashedPassword = await passwordHelper.hash(userpassword);
    let verifyResult = await passwordHelper.verify(userpassword, hashedPassword);

    if(userpassword === verify){
        let result = await this.app.mysql.query('update register set userpassword = ?, verify = ? where useremail = ?', [hashedPassword, verifyResult, useremail]);
            console.log(result);
            return "密码更改成功，请前往登录！"
    }else{
        return "密码不一致，请从新输入！"
    }
  }

}

module.exports = UpdatepasswordService;
