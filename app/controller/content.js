'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('content');
  }

  async article() {
    let id      = this.ctx.params.id;

    let todo  = await this.ctx.service.todo.getTodocontent(id);        
    await this.ctx.render('article', {todo});

  }

}

module.exports = ContentController;
