'use strict';

const Service = require('egg').Service;

class SelectAdminService extends Service {
  async adminTable() {
    let sql = await this.app.mysql.select('admin');
    return sql;
  }
}

module.exports = SelectAdminService;
