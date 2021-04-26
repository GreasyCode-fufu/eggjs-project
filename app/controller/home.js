'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home');
  }

  async introduce() {
    const { ctx } = this;
    await ctx.render('food');
  }

  async login() {
    const { ctx } = this;
    await ctx.render('login');
  }

  async homedetail() {
    const { ctx } = this;
    await ctx.render('homedetail');
  }

  async sea(){
    const {ctx}=this;
    await ctx.render('sea');
  }

  async poem(){
    const {ctx}=this;
    await ctx.render('poem');
  }

  async senior(){
    const {ctx}=this;
    let sql=await this.ctx.service.selectAdmin.adminTable();
    await ctx.render('showAdmin',{sql});
  }
}

module.exports = HomeController;
