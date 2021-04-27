'use strict';

const Service = require('egg').Service;

class SelectuserService extends Service {
  async usertable() {

    let sql = await this.app.mysql.select('register');
    console.log('____________________________--');
    console.log(sql);
    console.log('____________________________--');
    return sql;

  }
}

module.exports = SelectuserService;
