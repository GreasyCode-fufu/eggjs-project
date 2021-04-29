'use strict';

const Controller = require('egg').Controller;

class DeleteAdminController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('deleteAdmin');
  }

  async deleteAdmin() {
    const { ctx } = this;
    let adminName = ctx.request.body.adminName;
    let service = await this.ctx.service.home.deleteAdmin(adminName);
    let sql = await this.ctx.service.selectAdmin.adminTable();
    if(service === "没有找到"){
        await ctx.render('fails');
    }else{
        await ctx.render('showAdmin',{sql});
       
    }
  }
}

module.exports = DeleteAdminController;
