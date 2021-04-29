'use strict';

const Service = require('egg').Service;
const PasswordHelper = require('../controller/password2');

class HomeService extends Service {
  async index(useremail, userpassword) {

    let passwordHelper = new PasswordHelper();
    let value =  await this.app.mysql.get('register', {
        useremail:useremail,
    })
    let verifyResult = await passwordHelper.verify(userpassword, value.userpassword);
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

    if (value){
        return value;
    }else{
        return "没有找到";
    }
    
  }

  async deleteuser(id) {
    await this.app.mysql.query('delete from register where userid = ?',[id]);
    return "删除成功";
    
  }

  async addAdminPassword(adminName, addAdminPassword, submission_date){
    let passwordHelper = new PasswordHelper();
    let adminHashedPassword = await passwordHelper.hash(addAdminPassword);
    if(addAdminPassword){
      let result = await this.app.mysql.insert("admin",{
        adminName: adminName,
        adminPassword: adminHashedPassword,
        submission_date: submission_date
    });
    return result;
    }else{
      return false;
    }
  }
}

module.exports = HomeService;
