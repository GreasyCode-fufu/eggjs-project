'use strict';

const Service = require('egg').Service;


class SelectAdminService extends Service {
  async adminTable() {
    let sql = await this.app.mysql.select('admin');
    for(let i=0; i<sql.length; i++){     //转换日期格式
      let date = new Date(sql[i].submission_date)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      const time =  y + '-' + m + '-' + d;
      sql[i].submission_date = time;
    }
    return sql;
  }
}

module.exports = SelectAdminService;
