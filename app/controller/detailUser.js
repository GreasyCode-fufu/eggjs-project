'use strict';

const Controller = require('egg').Controller;

class DetailUserController extends Controller {
  async index() {
    const { ctx } = this;
    let sql=await this.ctx.service.selectuser.detailUser();   //获取用户详细信息数据，service中detailUser()方法采用级联查询，将返回值赋给sql变量
    await ctx.render('detailUser',{sql});   //转到用户详细信息表
  }
}

module.exports = DetailUserController;
