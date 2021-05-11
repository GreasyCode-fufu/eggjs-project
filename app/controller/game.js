'use strict';

const Controller = require('egg').Controller;

class GameController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('game');   //转到游戏界面
  }
}

module.exports = GameController;
