'use strict';

const Controller = require('egg').Controller;

class EditUserController extends Controller {
  async edituser() {
    let userid      = this.ctx.params.userid;                                       //前端页面获取该信息对应id
    let judge = await this.ctx.service.selectuser.userinfo(userid);                 //通过此id查询userinfo表是否有该信息，将结果赋值给judge
    
    if (judge){                                                                     //如果变量存在，不为空，执行以下语句
      let sql=await this.ctx.service.selectuser.usertable();                         //查询用户信息，赋值给sql
      await this.ctx.render('alreadyHaveInfos', {sql});                             //显示用户信息，此页面比原始用户信息表多了一个提示用户已存在提示框（功能需改进，该处只是页面跳转，给人一种假象）

    }else{                                                                          //如果依据id在userinfo表中没要找到对应信息，则需要转到详细信息输入表单页面，让用户输入信息
      let userid      = this.ctx.params.userid;
      let item    = await this.ctx.service.editUser.edituser(userid);               //此处会将对应id的email显示在需要编辑的用户表单里，起一个提示作用，同时也将对应id的信息存入userinfo表中
      if (this.ctx.request.method === 'POST') {
              let gender = this.ctx.request.body.gender;
              let age = this.ctx.request.body.age;
              
              await this.ctx.service.editUser.adduserInfos(userid, gender, age);    //将信息存入userinfo表

              this.ctx.redirect('/usertable');
          }
                                                                                      //这个逻辑有些乱，我现在有点不理解2021.5.4
          await this.ctx.render('userinfos', {item});                                 //转到用户输入表单页面，此处会将对应id的email显示在需要编辑的用户表单里，起一个提示作用。
    }
        
  }
}

module.exports = EditUserController;
