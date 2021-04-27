'use strict';

const Service = require('egg').Service;


class SelectAdminService extends Service {
  async adminTable() {
    let sql = await this.app.mysql.select('admin');
    for(let i=0; i<sql.length; i++){
      console.log('转换前的数据为：');
      console.log(sql[i].submission_date);

      let date = new Date(sql[i].submission_date)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      const time =  y + '-' + m + '-' + d;
      // ...
      // let time='转换后的数据'
      sql[i].submission_date = time;

      console.log('转换后的数据为：');
      console.log(sql[i].submission_date);
    }
    return sql;
  }
}

module.exports = SelectAdminService;
