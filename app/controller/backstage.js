'use strict';

const Controller = require('egg').Controller;

class BackstageController extends Controller {
  async index() {
    const {ctx}=this;
    await ctx.render('indexbackstage');   //转到后台页面
  }

  async input() {
    const {ctx}=this;
    await ctx.render('input');    //没用
  }
}

module.exports = BackstageController;
