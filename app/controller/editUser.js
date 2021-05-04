'use strict';

const Controller = require('egg').Controller;

class EditUserController extends Controller {
  async edituser() {
    let userid      = this.ctx.params.userid;
    let judge = await this.ctx.service.selectuser.userinfo(userid);
    
    if (judge){
      let sql=await this.ctx.service.selectuser.usertable(); 
      await this.ctx.render('alreadyHaveInfos', {sql});

    }else{
      let userid      = this.ctx.params.userid;
      let item    = await this.ctx.service.editUser.edituser(userid);
      if (this.ctx.request.method === 'POST') {
  //             item.userid = this.ctx.request.body.userid;
              let gender = this.ctx.request.body.gender;
              let age = this.ctx.request.body.age;
              
              await this.ctx.service.editUser.adduserInfos(userid, gender, age);

              this.ctx.redirect('/usertable');
          }

          await this.ctx.render('userinfos', {item});
    }
        
  }
}

module.exports = EditUserController;
