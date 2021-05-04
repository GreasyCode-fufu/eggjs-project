'use strict';

const Controller = require('egg').Controller;
const PasswordHelper = require('./password2');

class RegisterController extends Controller {
  async index() {
    const {ctx} = this;
    await ctx.render('register');
  }

  async adduser(){
    const {ctx} = this;
    let passwordHelper = new PasswordHelper();
    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    let hashedPassword = await passwordHelper.hash(userpassword);     //加密密码
    let verify = ctx.request.body.verify;
    let verifyResult = await passwordHelper.verify(verify, hashedPassword);   //验证判断
    let telephone = ctx.request.body.telephone;
    let sql =await this.ctx.service.adduser.index(useremail, hashedPassword, verifyResult, telephone);  //存入数据库

    if(sql === "注册成功，请登录！"){
      await ctx.render('register',{sql});
    }else{
      await ctx.render('register',{sql});
    }
  }
}

module.exports = RegisterController;
