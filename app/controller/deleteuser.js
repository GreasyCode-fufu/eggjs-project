'use strict';

const Controller = require('egg').Controller;

class DeleteuserController extends Controller {
  async deleteuser() {
    let id  = this.ctx.request.query.id;    //前端页面获取对应id
    await this.ctx.service.home.deleteuser(id);   //传入service对应方法
    this.ctx.redirect('/usertable');    //重定向到用户表
  }
}

module.exports = DeleteuserController;
