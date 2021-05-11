'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');
class ContentController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('content');        //转到显示文章卡片页面
  }

  async article() {
    let id      = this.ctx.params.id;                              //获取此处的id（通过前端页面的for循环获取元素对应的id值）

    let todo  = await this.ctx.service.todo.getTodocontent(id);    //通过该id查找数据库中对应内容，返回给todo变量   
    await this.ctx.render('article', {todo});                      //将拥有此id的对象传给文章显示页面

  }

  async list() {            //分页功能
    //this.ctx.checkin()
    let count       = await this.ctx.service.content.getCategorysCount();       //获取文章数量
    let limit       = 4;                                                        //设置页面显示数量
    let pages       = Math.ceil(count / limit);                                 //Math.ceil() 函式会回传大于等于所给数字的最小整数。
    if (pages < 1) {
        pages       = 1;
    }
    let page        = parseInt(this.ctx.request.query.page);                    //获取前台page
    if (isNaN(page) || page < 1) {
        page        = 1;
    }
    if (page > pages) {
        page        = pages;
    }
    let offset      = (page - 1) * limit;                   //offset为偏移量
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
    let categorys    = await this.ctx.service.content.getCategorys(offset,limit);       //获取文章内容
    // console.log(categorys);
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

    async search(){                                                             //获取表单提交
        if (this.ctx.request.method === 'POST'){
                const {ctx} = this;
                await this.ctx.service.content.dropxcontent();                  //清空数据库
                let search = ctx.request.body.search;
                const item = await this.ctx.service.content.getCategorys();     //获取数据传入item
                const fuse = new Fuse(item, {                                   //此处item为搜索源数据对象
                    keys: ['title', 'biaoqian', 'zhaiyao']                      //key中的元素为按对象中的键来匹配对应的值
                })

                let result = fuse.search(search);                               //返回搜索结果给result
                
                await this.ctx.service.content.insertXcontent(result);          //将结果插入临时表‘xcontent’
                this.ctx.redirect('/search');
            }
    }
        
    async searchList(){                                                          //将结果分页显示到页面上
        let count = await this.ctx.service.content.getXcontentCount();
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
        let categorys    = await this.ctx.service.content.getXcontents(offset,limit);
        // console.log(categorys);
        await this.ctx.render('todo/searchResult.html',{
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
