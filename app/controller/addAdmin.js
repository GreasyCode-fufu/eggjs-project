'use strict';

const Controller = require('egg').Controller;

class AddAdminController extends Controller {
  async getaddAdmin(){
        const { ctx } = this;
        await ctx.render('addAdminPassword');   //转到添加管理员表单界面
  }
  
  async index() {
        const{ctx} = this;  
        let adminName = ctx.request.body.adminName;       //获取表单提交的信息
        let adminPassword = ctx.request.body.adminPassword;
        let submission_date = ctx.request.body.submission_date;
        
        let service = await this.ctx.service.home.addAdminPassword(adminName, adminPassword, submission_date);  //将获得的信息调入service进而存入数据库        
        let sql=await this.ctx.service.selectAdmin.adminTable();  //调用service里selectAdmin文件中adminTable方法获得管理员信息，赋值给sql
        if(service){    //如果变量service不为空（表示service文件内程序执行正常）则转到显示管理员信息界面
            await ctx.render('showAdmin',{sql});
        }else{
            await ctx.render('fails');    //否者返回错误
        }
  }


}

module.exports = AddAdminController;
