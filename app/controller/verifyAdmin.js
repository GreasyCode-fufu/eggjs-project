'use strict';

const Controller = require('egg').Controller;

class VerifyAdminController extends Controller {
  async index() {
        const { ctx } = this;
        let adminName = ctx.request.body.adminName;
        let adminPassword = ctx.request.body.adminPassword;
        let verifyAdmin = await this.ctx.service.verifyAdmin.verifyAdmin(adminName, adminPassword);
        if(verifyAdmin === "没有找到"){
            await ctx.render('error')
        }else{
            await ctx.render('indexbackstage');
        }
  }
}

module.exports = VerifyAdminController;
