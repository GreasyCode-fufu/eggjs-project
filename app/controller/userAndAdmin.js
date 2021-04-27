'use strict';

const Controller = require('egg').Controller;

class UserAndAdminController extends Controller {
  async index() {
        const {ctx}=this;
        let count1 = await this.ctx.service.count.countUser();
        let count2 = await this.ctx.service.count.countAdmin();
        let count = new Object();
        count.count1 = count1;
        count.count2 = count2;
        await ctx.render('userAndAdmin',{count});
  }

}

module.exports = UserAndAdminController;
