'use strict';

const Controller = require('egg').Controller;

class ForgetController extends Controller {
  async index() {
    const {ctx}=this;
    await ctx.render('forget');     //转到忘记密码页面
  }
}

module.exports = ForgetController;
