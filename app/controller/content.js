'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('content');
  }

  async article() {
    const { ctx } = this;
    await ctx.render('article');
  }

}

module.exports = ContentController;
