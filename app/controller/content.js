'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('content');        //转到显示文章卡片页面
  }

  async article() {
    let id      = this.ctx.params.id;           //获取此处的id（通过前端页面的for循环获取元素对应的id值）

    let todo  = await this.ctx.service.todo.getTodocontent(id);    //通过该id查找数据库中对应内容，返回给todo变量   
    await this.ctx.render('article', {todo});       //将拥有此id的对象传给文章显示页面

  }

  async list() {            //分页功能
    //this.ctx.checkin()
    let count       = await this.ctx.service.content.getCategorysCount();
    let limit       = 4;
    let pages       = Math.ceil(count / limit);
    if (pages < 1) {
        pages       = 1;
    }
    let page        = parseInt(this.ctx.request.query.page);
    if (isNaN(page) || page < 1) {
        page        = 1;
    }
    if (page > pages) {
        page        = pages;
    }
    let offset      = (page - 1) * limit;
    let start       = 1;
    let stop        = pages;
    if (pages > 5) {
        start       = page - 2;
        stop        = page + 2;
        if (start < 1) {
            stop        += 1 - start;
            start       = 1;
        }
        if (start > pages) {
            start       -= stop - pages;
            stop        = pages;
        }
    }
    let categorys    = await this.ctx.service.content.getCategorys(offset,limit);
    await this.ctx.render('todo/content.html',{
        categorys,
        page,
        start,
        stop,
        pages,
        limit,
        count
    });
}

}

module.exports = ContentController;
