'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');
// const fs = require('fs');

class TestController extends Controller {

  async getXiehouyu() {
      const { ctx } = this;
     await ctx.render('xiehouyuPage');    
      }

  async getWord() {
      const { ctx } = this;
     await ctx.render('wordPage');   
      }

  async getCi() {
      const { ctx } = this;
      await ctx.render('ciPage');   
      }  

  async getContent() {
      const { ctx } = this;
      await ctx.render('contentPage');   
      } 

  async getIdiom() {
      const { ctx } = this;
      await ctx.render('idiomPage');   
      } 

//----------------------------------------------------------------------
 
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

    async Pageci(){
        let search = this.ctx.request.query.search;
        let result = await this.ctx.service.test.ci(search);
        let count = result.length;
        let limit       = 10;
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
 
        await this.ctx.render('Pageci.html', {
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


        async Pageword(){
            let search = this.ctx.request.query.search;
            let result = await this.ctx.service.test.word(search);
            let count = result.length;
            let limit       = 1;
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

            await this.ctx.render('Pageword.html', {
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


        async Pageidiom(){
            let search = this.ctx.request.query.search;
            let result = await this.ctx.service.test.idiom(search);
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
     
      await this.ctx.render('Pageidiom.html', {
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

      async Pagecontent(){
        if (this.ctx.request.method === 'POST'){
            const {ctx} = this;
            await this.ctx.service.content.dropxcontent();  //清空数据库
            let search = ctx.request.body.search;
            const item = await this.ctx.service.content.getCategorys();
            // console.log(item);
            const fuse = new Fuse(item, {
                keys: ['title', 'biaoqian', 'zhaiyao']
            })

            let result = fuse.search(search);
            
            await this.ctx.service.content.insertXcontent(result);
            this.ctx.redirect('/Pagecontent');
        }
      }

            async PagecontentList(){
                // let search = this.ctx.request.query.search;
                // let result = await this.ctx.service.test.Array(search);
                let count = await this.ctx.service.content.getXcontentCount();
                // let count = result.length;
                let limit       = 3;
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
        
            await this.ctx.render('Pagecontent.html', {
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
  



module.exports = TestController;
