'use strict';

const Controller = require('egg').Controller;
const PasswordHelper = require('./password2');

class SuccessController extends Controller {
  async index() {
    const{ctx} = this;

    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    let passwordHelper = new PasswordHelper();
    // let hashedPassword = await passwordHelper.hash('Hello World!');
    // let verifyResult = await passwordHelper.verify('Hello World!', hashedPassword);
    // console.log("验证结果为：" + verifyResult);
    // console.log(hashedPassword);
    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    console.log(useremail);
    console.log(userpassword);
    

    let service = await this.ctx.service.home.index(useremail, userpassword);
    console.log('----------------------');
    console.log(service);
    if(service === "没有找到"){
        await ctx.render('fails')
    }else{
        await ctx.render('food');
    }

    
  }
}

module.exports = SuccessController;
