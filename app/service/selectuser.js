'use strict';

const Service = require('egg').Service;

class SelectuserService extends Service {
  async usertable() {

    let sql = await this.app.mysql.select('register', {orders: [['userid', 'desc']]});
    return sql;

  }
}

module.exports = SelectuserService;
