'use strict';

const Service = require('egg').Service;

class ContentService extends Service {
  async getCategorysCount() {
    return await this.app.mysql.count('content',{});
  }

  async getCategorys(offset,limit){
    return await this.app.mysql.select('content',{
        orders:[['id','desc']],
        offset,
        limit,
    });
}
}

module.exports = ContentService;
