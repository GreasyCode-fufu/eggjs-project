'use strict';

const Service = require('egg').Service;

class DictionaryService extends Service {
  async insertCi(result) {
      
    for(let i=0; result.length - i> 0; i = i + 1 ){
        await this.app.mysql.insert('ci', result[(result.length - (result.length-1) + i - 1)].item);
    }
        
  }

  async getCi(offset,limit){
    return await this.app.mysql.select('ci',{
        // orders:[['id','desc']],
        offset,
        limit,
    });
  }

  async getCiCount() {
    return await this.app.mysql.count('ci',{});
  }

  async dropCi(){
    await this.app.mysql.query('truncate table ci');
  }

}


module.exports = DictionaryService;
