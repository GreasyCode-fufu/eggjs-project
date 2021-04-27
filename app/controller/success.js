'use strict';

const Controller = require('egg').Controller;
const PasswordHelper = require('./password2');

class SuccessController extends Controller {
  async index() {
    const{ctx} = this;

    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    

    let service = await this.ctx.service.home.index(useremail, userpassword);
    if(service === "没有找到"){
        await ctx.render('error')
    }else{
        await ctx.render('food');
    }

    
  }
}

module.exports = SuccessController;
