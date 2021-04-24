'use strict';

const Controller = require('egg').Controller;

class SuccessController extends Controller {
  async index() {
    const{ctx} = this;
    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    console.log(useremail);
    console.log(userpassword);

    let service = await this.ctx.service.home.index(useremail, userpassword);
    console.log('----------------------')
    console.log(service);
    if(service === "没有找到"){
        await ctx.render('fails')
    }else{
        await ctx.render('food');
    }

    
  }
}

module.exports = SuccessController;
