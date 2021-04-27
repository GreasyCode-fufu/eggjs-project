'use strict';

const Service = require('egg').Service;
const PasswordHelper = require('../controller/password2');

class VerifyAdminService extends Service {
  async verifyAdmin(adminName, adminPassword) {
    let passwordHelper = new PasswordHelper();
    let value =  await this.app.mysql.get('admin', {
        adminName:adminName,
    })
    let verifyResult = await passwordHelper.verify(adminPassword, value.adminPassword);

    if (value && verifyResult){
        return value;
    }else{
        return "没有找到";
    }
  }
}

module.exports = VerifyAdminService;
