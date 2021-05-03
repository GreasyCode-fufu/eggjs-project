'use strict';

const Controller = require('egg').Controller;

class DetailUserController extends Controller {
  async index() {
    const { ctx } = this;
    let sql=await this.ctx.service.selectuser.detailUser();
    await ctx.render('detailUser',{sql});
  }
}

module.exports = DetailUserController;
