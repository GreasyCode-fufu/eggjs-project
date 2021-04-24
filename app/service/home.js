'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index(useremail, userpassword) {
    console.log({useremail, userpassword})

   let value =  await this.app.mysql.get('register', {
        useremail:useremail,
        userpassword:userpassword,
    })

    console.log(value);

    if (value){
        return value;
    }else{
        return "没有找到";
    }
    
  }

  async confirm(userpassword) {
    console.log({userpassword})

   let value =  await this.app.mysql.get('register', {
        userpassword:userpassword,
    })

    console.log("-----------------确认密码mysql传入数据-----------")
    console.log(value);

    if (value){
        return value;
    }else{
        return "没有找到";
    }
    
  }

  async deleteuser(useremail) {
    console.log({useremail});
    await this.app.mysql.query('delete from register where useremail = ?',[useremail]);

    console.log("-----------------删除成功-----------")
    return "删除成功";
    // console.log(value);

    // if (value){
    //     return value;
    // }else{
    //     return "没有找到";
    // }
    
  }



}

module.exports = HomeService;
