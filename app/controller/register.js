'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const {ctx} = this;
    await ctx.render('register');
  }

  async adduser(){
    const {ctx} = this;
    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    let verify = ctx.request.body.verify;
    let telephone = ctx.request.body.telephone;

    console.log("前端传入的数据为：");
    console.log(useremail);
    console.log(userpassword);
    console.log(verify);
    console.log(telephone);

    let sql=await this.ctx.service.adduser.index(useremail, userpassword, verify, telephone);

    if(sql === "注册成功，请登录！"){
      await ctx.render('register',{sql});
    }else{
      await ctx.render('register',{sql});
    }
  }
}

module.exports = RegisterController;
