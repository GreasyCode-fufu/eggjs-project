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

   async insertXcontent(result){
    console.log("---------------------------");
    // console.log(result.length);              //这里调试痕迹我舍不得删
    //  console.log(result[0].item);
      for(let i=0; result.length - i> 0; i = i + 1 ){
        // await this.app.mysql.insert('xcontent', result[0].item);
        // console.log(result.length - (result.length-1) + i - 1);
        await this.app.mysql.insert('xcontent', result[(result.length - (result.length-1) + i - 1)].item);

        
      }
    // for(let item in result){
      // console.log(item);
      // await this.app.mysql.insert('xcontent', result[0].item);
    // }
      // await this.app.mysql.insert('xcontent', result.item);
      console.log("---------------------------");
  }

   
  async getXcontents(offset,limit){
    return await this.app.mysql.select('xcontent',{
        // orders:[['id','desc']],
        offset,
        limit,
    });
  }

  async getXcontentCount() {
    return await this.app.mysql.count('xcontent',{});
  }

  async dropxcontent(){
    await this.app.mysql.query('truncate table xcontent');
  }

}

module.exports = ContentService;
