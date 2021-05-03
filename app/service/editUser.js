'use strict';

const Service = require('egg').Service;

class EditUserService extends Service {
  async edituser(userid) {
    return await this.app.mysql.get('register', {userid});
  }

  async adduserInfos(userid, gender, age){
    let result = await this.app.mysql.insert('userinfo',{
                    userid:userid,
                    gender:gender,
                    age:age,
                })
        console.log(result);
        return result.insertUserid;
  }
}

module.exports = EditUserService;
