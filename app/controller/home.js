'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home');   //转到主页
  }

  async fails() {
    const { ctx } = this;
    await ctx.render('error');      //没用
  }

  async introduce() {
    const { ctx } = this;
    await ctx.render('food');   //登录后转到的页面
  }

  async login() {
    const { ctx } = this;
    await ctx.render('login');      //转到登录页面
  }

  async homedetail() {
    const { ctx } = this;
    await ctx.render('homedetail');       //转到详细的页面
  }

  async sea(){
    const {ctx}=this;
    await ctx.render('sea');          //转到另一个页面
  }

  async poem(){
    const {ctx}=this;
    await ctx.render('poem');       //转到日本语页面
  }

  async senior(){
    const {ctx}=this;
    let sql=await this.ctx.service.selectAdmin.adminTable();      //转到高级权限的首页，直接显示管理员的信息
    await ctx.render('showAdmin',{sql});
  }
}

module.exports = HomeController;
