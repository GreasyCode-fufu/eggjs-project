'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');
const fs = require('fs');

class TestController extends Controller {

  async getXiehouyu() {
      const { ctx } = this;
     await ctx.render('xiehouyuPage');    //转到添加用户界面
      }

  async PagexiehouyuList(){
    const {ctx} = this;
    if (this.ctx.request.method === 'POST') {
          const {ctx} = this;
          let search = ctx.request.body.search; 
          console.log(search);
          await this.ctx.service.test.Array(search);
          this.ctx.redirect('/Pagexiehouyu');
    }
    // this.ctx.body ={ name =`search: ${ctx.query.name}`,};
    // console.log();
    // let a = this.ctx.body = `search: ${ctx.query.name}`;
    // console.log(a);

}

  async Pagexiehouyu(){
          let search = this.ctx.request.query.search;
          let result = await this.ctx.service.test.Array(search);
          let count = result.length;
          let limit       = 5;
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
          var categorys  =new Array();
          for(let i = offset ; i < offset + limit; ++i){
              categorys.push(result[i]);

    }
   
    await this.ctx.render('Pagexiehouyu.html', {
        categorys,
        page,
        start,
        stop,
        pages,
        limit,
        count,
        search
    });
  
         
        }
  }
  



module.exports = TestController;
