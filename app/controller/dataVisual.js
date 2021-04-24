'use strict';

const Controller = require('egg').Controller;

class DataVisualController extends Controller {
  async dataBar() {
    const { ctx } = this;
    await ctx.render('dataVisual');
  }
}

module.exports = DataVisualController;
