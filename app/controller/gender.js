'use strict';

const Controller = require('egg').Controller;

class GenderController extends Controller {
  async index() {
    const {ctx}=this;
        let count1 = await this.ctx.service.count.countMale();
        let count2 = await this.ctx.service.count.countFamale();
        let count = new Object();
        count.count1 = count1;
        count.count2 = count2;
        await ctx.render('gender',{count});
  }
}

module.exports = GenderController;
