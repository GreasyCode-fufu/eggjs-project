'use strict';

const Controller = require('egg').Controller;

class ResetController extends Controller {
  async index() {
    const {ctx}=this;
    console.log('controll连接成功');
    let useremail=ctx.request.body.useremail;
    let telephone=ctx.request.body.telephone;
    let sql=await this.ctx.service.reset.index(useremail,telephone);   //对数据库更新操作
    if(sql==="该用户不存在"){
        await ctx.render('forget',{sql});
    }else{
    await ctx.render('reset');        
    }
  }
}

module.exports = ResetController;
