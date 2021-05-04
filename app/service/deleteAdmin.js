'use strict';

const Service = require('egg').Service;

class DeleteAdminService extends Service {
  async index(id) {
    await this.app.mysql.query('delete from admin where id = ?',[id]);  //通过该id删除对应内容
    return "删除成功";
  }
}

module.exports = DeleteAdminService;
