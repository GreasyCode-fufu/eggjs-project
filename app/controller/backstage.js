'use strict';

const Controller = require('egg').Controller;

class BackstageController extends Controller {
  async index() {
    const {ctx}=this;
    await ctx.render('backstage');
  }

  async input() {
    const {ctx}=this;
    await ctx.render('input');
  }
}

module.exports = BackstageController;
