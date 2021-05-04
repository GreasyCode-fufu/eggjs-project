'use strict';

const Controller = require('egg').Controller;

class ResetpasswordController extends Controller {
  async index() {
    const {ctx} = this;
    let userpassword = ctx.request.body.userpassword;
    let verify = ctx.request.body.verify;
    let useremail = ctx.request.body.useremail;
    let result = await this.ctx.service.updatepassword.index(userpassword,verify,useremail);    //更新操作
    if(result === "密码更改成功，请前往登录！"){
        await ctx.render('reset', {result});        //混乱的代码，沃日你妈
    }else{
        await ctx.render('reset', {result});
    }

  }
}

module.exports = ResetpasswordController;
