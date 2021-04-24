'use strict';

const Service = require('egg').Service;

class SelectuserService extends Service {
  async usertable() {

    let sql = await this.app.mysql.select('register');
    return sql;

  }
}

module.exports = SelectuserService;
