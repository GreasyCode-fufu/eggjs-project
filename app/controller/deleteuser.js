'use strict';

const Controller = require('egg').Controller;

class DeleteuserController extends Controller {
  async deleteuser() {
    const { ctx } = this;
    await ctx.render('deleteuser');
  }
}

module.exports = DeleteuserController;
