'use strict';

const Controller = require('egg').Controller;

class DeleteuserController extends Controller {
  async deleteuser() {
    // const { ctx } = this;
    // await ctx.render('deleteuser');
    let id  = this.ctx.request.query.id;
    await this.ctx.service.home.deleteuser(id);
    this.ctx.redirect('/usertable');
  }
}

module.exports = DeleteuserController;
