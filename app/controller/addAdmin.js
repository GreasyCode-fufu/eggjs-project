'use strict';

const Controller = require('egg').Controller;

class AddAdminController extends Controller {
  async getaddAdmin(){
        const { ctx } = this;
        await ctx.render('addAdminPassword');
  }
  
  async index() {
        const{ctx} = this;
        let adminName = ctx.request.body.adminName;
        let adminPassword = ctx.request.body.adminPassword;
        let submission_date = ctx.request.body.submission_date;
        let service = await this.ctx.service.home.addAdminPassword(adminName, adminPassword, submission_date);
        let sql=await this.ctx.service.selectAdmin.adminTable();
        if(service){
            await ctx.render('showAdmin',{sql});
        }else{
            await ctx.render('fails');
        }
  }


}

module.exports = AddAdminController;
