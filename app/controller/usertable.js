'use strict';

const Controller = require('egg').Controller;

class UsertableController extends Controller {
  async usertable() {
    const { ctx } = this;

    let sql=await this.ctx.service.selectuser.usertable(); 

    await ctx.render('usertable',{sql});
  }

  async confirm(){
    const { ctx } = this;
    let userpassword = ctx.request.body.userpassword;
    let service = await this.ctx.service.home.confirm(userpassword);
    if(service === "没有找到"){
        await ctx.render('fails')
    }else{
        await ctx.render('deleteuser');
    }
  }

  async deleteuser(){
    const { ctx } = this;
    let useremail = ctx.request.body.useremail;
    let userpassword = ctx.request.body.userpassword;
    let service = await this.ctx.service.home.deleteuser(useremail);
    let sql = await this.ctx.service.selectuser.usertable();
    if(service === "没有找到"){
        await ctx.render('fails')
    }else{
        await ctx.render('usertable',{sql});
    }
  }
}

module.exports = UsertableController;
