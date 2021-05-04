'use strict';

const Controller = require('egg').Controller;

class GenderController extends Controller {
  async index() {
    const {ctx}=this;
        let count1 = await this.ctx.service.count.countMale();    //获取女生的数量赋值给count1
        let count2 = await this.ctx.service.count.countFamale();  //获取男生的数量赋值给count2
        let count = new Object();                                 //创建一个count对象
        count.count1 = count1;                                    //给count对象创建属性并赋予其值
        count.count2 = count2;
        await ctx.render('gender',{count});                       //转到数据可视化，可轻松使用count对象里的属性信息
  }
}

module.exports = GenderController;
