'use strict';

const Controller = require('egg').Controller;

class ForgetController extends Controller {
  async index() {
    const {ctx}=this;
    await ctx.render('forget');
  }
}

module.exports = ForgetController;
