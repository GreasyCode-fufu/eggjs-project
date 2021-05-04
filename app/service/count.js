'use strict';

const Service = require('egg').Service;

class CountService extends Service {
  async countUser() {
    let countUser = await this.app.mysql.query('select count(*) from register');
    let results = JSON.stringify(countUser);
    results = JSON.parse(results);
    let tempArr = Object.keys(results[0])
    for (let key in results[0]) {
        return results[0][key];
      }
  }

  async countAdmin(){
    let countAdmin = await this.app.mysql.query('select count(*) from admin');
    let results1 = JSON.stringify(countAdmin);
    results1 = JSON.parse(results1);
    for (let key in results1[0]) {
      return results1[0][key];
    }
  }


  async countMale(){
    let countMale = await this.app.mysql.query("select sum(case when gender='男' then 1 else 0 end ) from userinfo;");
    let results2 = JSON.stringify(countMale);
    results2 = JSON.parse(results2);
    for (let key in results2[0]){
      return results2[0][key];
    }
  }


  async countFamale(){
    let countFamale = await this.app.mysql.query("select sum(case when gender='女' then 1 else 0 end ) from userinfo;");
    let results3 = JSON.stringify(countFamale);
    results3 = JSON.parse(results3);
    for (let key in results3[0]){
      return results3[0][key];
    }
  }

}

module.exports = CountService;
