'use strict';

const Controller = require('egg').Controller;

class DataVisualController extends Controller {
  async dataBar() {
    const { ctx } = this;
    await ctx.render('dataVisual');   //转到数据可视化首页
  }
}

module.exports = DataVisualController;
