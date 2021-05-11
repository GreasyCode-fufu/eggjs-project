'use strict';

const Controller = require('egg').Controller;

class DeleteAdminController extends Controller {
  async index() {
    let id  = this.ctx.request.query.id;            //依据前端页面获取要删除对象的id(前端页面通过for循环获得)
    await this.ctx.service.deleteAdmin.index(id);   //将此id传入service对应文件方法进行删除操作
    this.ctx.redirect('/senior');                   //重定向到高级权限首页（个人感觉此处有待改善）
  }

  
}

module.exports = DeleteAdminController;
