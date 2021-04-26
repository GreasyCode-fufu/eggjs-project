'use strict';

const Service = require('egg').Service;
const PasswordHelper = require('../controller/password2');

class HomeService extends Service {
  async index(useremail, userpassword) {

    let passwordHelper = new PasswordHelper();
    let value =  await this.app.mysql.get('register', {
        useremail:useremail
    })
   
    let verifyResult = await passwordHelper.verify(userpassword, value.userpassword);
    console.log("验证结果为：" + verifyResult);

    if (value && verifyResult){
        return value;
    }else{
        return "没有找到";
    }
    
  }

  async confirm(userpassword) {
    console.log({userpassword})

   let value =  await this.app.mysql.get('register', {
        userpassword:userpassword,
    })

    console.log("-----------------确认密码mysql传入数据-----------")
    console.log(value);

    if (value){
        return value;
    }else{
        return "没有找到";
    }
    
  }

  async deleteuser(useremail) {
    console.log({useremail});
    await this.app.mysql.query('delete from register where useremail = ?',[useremail]);

    console.log("-----------------删除成功-----------")
    return "删除成功";
    
  }

  async addAdminPassword(addAdminPassword){
    console.log(addAdminPassword);
    let passwordHelper = new PasswordHelper();
    let adminHashedPassword = await passwordHelper.hash(addAdminPassword);
    if(addAminPassword){
      let result = await this.app.mysql.insert("admin",{
        adminPassword: adminHashedPassword
    });
    return true;
    }else{
      return false;
    }


  }



}

module.exports = HomeService;
