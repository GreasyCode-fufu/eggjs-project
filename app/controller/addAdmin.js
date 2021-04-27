'use strict';

const Controller = require('egg').Controller;

class AddAdminController extends Controller {
  async getaddAdmin(){
        const { ctx } = this;
        await ctx.render('addAdminPassword');
  }
  
  async index() {
        const{ctx} = this;
        let adminPassword = ctx.request.body.adminPassword;
        console.log(adminPassword);
        let service = await this.ctx.service.home.addAdminPassword(adminPassword);
        if(service){
            await ctx.render('addAdminPassword');
        }
  }


}

module.exports = AddAdminController;
