'use strict';

const Controller = require('egg').Controller;
const PasswordHelper = require('./password2');

class AddUserController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('adduser');
  }

  async adduserSuccess() {
    const {ctx} = this;
    let passwordHelper = new PasswordHelper();
    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    let hashedPassword = await passwordHelper.hash(userpassword);
    let verify = ctx.request.body.verify;
    // let hashedPasswordVerify = await passwordHelper.hash(verify);
    let verifyResult = await passwordHelper.verify(verify, hashedPassword);
    let telephone = ctx.request.body.telephone;

    // console.log("前端传入的数据为：");
    // console.log(useremail);
    // console.log(userpassword);
    // console.log(hashedPassword);
    // console.log(verify);
    // // console.log(hashedPasswordVerify)
    // console.log(telephone);

    let sql =await this.ctx.service.adduser.index(useremail, hashedPassword, verifyResult, telephone);

    if(sql === "注册成功，请登录！"){
        
        let sql=await this.ctx.service.selectuser.usertable(); 
        await ctx.render('usertable',{sql});
    }else{
      await ctx.render('fails');
    }
  }
}

module.exports = AddUserController;
