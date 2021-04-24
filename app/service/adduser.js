'use strict';

const Service = require('egg').Service;

class AdduserService extends Service {
  async index(useremail,userpassword,verify,telephone) {
    const{ctx}=this;
    console.log('service层连接成功');
    // console.log("******************************")
    // try {
    //   let test = ctx.validate({username:'string'});
    // } catch (error) {
    //   console.log(error.errors[0].message);
    //   return "不能为空！";
    // }
    // console.log("******************************")

    console.log(useremail);
    console.log(typeof(userpassword));
    console.log(verify);
    console.log(telephone);

    if(userpassword === verify){
        let result = await this.app.mysql.insert("register",{
            useremail:useremail,
            userpassword:userpassword,
            verify:verify,
            telephone:telephone
        });
        console.log(result);
        return "注册成功，请登录！"
    }else if(userpassword != verify){
        return "密码不一致，请从新输入!"
    }else{
      return "各输入框不能为空！"
    }
  }
}

module.exports = AdduserService;
