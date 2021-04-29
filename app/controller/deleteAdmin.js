'use strict';

const Controller = require('egg').Controller;

class DeleteAdminController extends Controller {
  async index() {
    let id  = this.ctx.request.query.id;
    await this.ctx.service.deleteAdmin.index(id);
    this.ctx.redirect('/senior');
  }

  
}

module.exports = DeleteAdminController;
