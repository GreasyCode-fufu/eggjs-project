'use strict';

const Service = require('egg').Service;

class ContentService extends Service {    //获取文章数量
  async getCategorysCount() {
    return await this.app.mysql.count('content',{});
  }

  async getCategorys(offset,limit){       //查询文章，offset，limit限制
    return await this.app.mysql.select('content',{
        orders:[['id','desc']],
        offset,
        limit,
    });
  }

   async insertXcontent(result){
      for(let i=0; result.length - i> 0; i = i + 1 ){     //循环输出数组内对象

        await this.app.mysql.insert('xcontent', result[(result.length - (result.length-1) + i - 1)].item);    
                                                        
                                                          //将输出内容反序插入‘xcontent’表
      }
  }

   
  async getXcontents(offset,limit){                        //获取'xcontent'表内数据
    return await this.app.mysql.select('xcontent',{
        // orders:[['id','desc']],
        offset,
        limit,
    });
  }

  async getXcontentCount() {                               //统计‘xcontent’数据数量
    return await this.app.mysql.count('xcontent',{});
  }

  async dropxcontent(){
    await this.app.mysql.query('truncate table xcontent');  //删除表中数据
  }

}

module.exports = ContentService;
