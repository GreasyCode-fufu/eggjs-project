'use strict';

const Controller = require('egg').Controller;
const PasswordHelper = require('./password2');    //引入password2文件（该文件为密码加密文件）

class AddUserController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('adduser');    //转到添加用户界面
  }

  async adduserSuccess() {
    const {ctx} = this;
    let passwordHelper = new PasswordHelper(); //创建passwordHelper对象
    let useremail = ctx.request.body.useremail;   //获取表单信息
    let userpassword = ctx.request.body.userpassword;
    let hashedPassword = await passwordHelper.hash(userpassword);   //对userpassword变量加密
    let verify = ctx.request.body.verify;
    let verifyResult = await passwordHelper.verify(verify, hashedPassword); //verify变量为前端‘确认密码’框输入值，使用该值与加密后的userpassword进行验证，正确则返回true
    let telephone = ctx.request.body.telephone;
    let sql =await this.ctx.service.adduser.index(useremail, hashedPassword, verifyResult, telephone);    //将输入结果存入数据库

    if(sql === "注册成功，请登录！"){   //“注册成功，请登录”,是调用注册时service里的方法，这里表示插入数据库执行正常
        
        let sql=await this.ctx.service.selectuser.usertable();    //查询用户表里的所有信息，赋值给变量sql
        await ctx.render('usertable',{sql});              //转到用户信息表
    }else{
      await ctx.render('fails');    //准到输入错误页面
    }
  }
}

module.exports = AddUserController;
