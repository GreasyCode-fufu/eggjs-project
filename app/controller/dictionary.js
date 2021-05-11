'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');    //导入外部模块
const fs = require('fs');           //导入外部模块

class DictionaryController extends Controller {
  async index() {
    const { ctx } = this;       //转到词语搜索首页
    let placeholder = "词语";
    await ctx.render('dictionaryIndex', {placeholder});
  }

  async idiomIndex(){           //转到成语搜索首页
    const { ctx } = this;
    let placeholder = "成语";
    await ctx.render('idiomIndex', {placeholder});
  }

  async wordIndex(){            //转到汉字搜索首页
    const { ctx } = this;
    let placeholder = "汉字";
    await ctx.render('wordIndex', {placeholder});
  }

  async xiehouyuIndex(){
    const { ctx } = this;       //转到歇后语搜索首页
    let placeholder = "歇后语";
    await ctx.render('xiehouyuIndex', {placeholder});
  }

  async ci(){
    if (this.ctx.request.method === 'POST'){
          const {ctx} = this;
          let search = ctx.request.body.search;                      //获取提交数据
          await this.ctx.service.dictionary.dropCi();                //清空'ci'临时表
          const data = fs.readFileSync('./app/data/json/ci.json');   //获取外部ci.json文件
          let res = data.toString();                                 //toString() 方法可把一个逻辑值转换为字符串，并返回结果。
          const list = JSON.parse(res);                              //JSON.parse(): This method parses a JSON text to produce an object or array.
          const fuse = new Fuse(list, {                              //搜索类型设置
            keys: ['ci']
          });

          let result = fuse.search(search);                          //根据form的提交返回结果
          await this.ctx.service.dictionary.insertCi(result);        //将结果插入临时表
          this.ctx.redirect('/dictionary');                          //重定向到显示页面
        }
  }
  
  async ciList(){
    let count = await this.ctx.service.dictionary.getCiCount();       //此处为分页显示内容，方式和其它页面分页一样
    let limit       = 15;
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
    let categorys    = await this.ctx.service.dictionary.getCi(offset,limit);
    await this.ctx.render('dictionary.html',{
        categorys,
        page,
        start,
        stop,
        pages,
        limit,
        count
    });

  }

  async idiom(){                                                  //成语搜索
    if (this.ctx.request.method === 'POST'){
      const {ctx} = this;
      let search = ctx.request.body.search;
      await this.ctx.service.dictionary.dropIdiom();
      const data = fs.readFileSync('./app/data/json/idiom.json');
      let res = data.toString();
      const list = JSON.parse(res);
      // console.log(userList);
      const fuse = new Fuse(list, {
        keys: ['word', 'abbreviation']
      });

      let result = fuse.search(search);
      await this.ctx.service.dictionary.insertIdiom(result);
      this.ctx.redirect('/idiom');
    }

  }

  async idiomList(){                                                //成语分页
    let count = await this.ctx.service.dictionary.getIdiomCount();
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
    let categorys    = await this.ctx.service.dictionary.getIdiom(offset,limit);
    // console.log(categorys);
    await this.ctx.render('idiom.html',{
        categorys,
        page,
        start,
        stop,
        pages,
        limit,
        count
    });

  }


  async xiehouyu(){                                                     //歇后语搜索
    if (this.ctx.request.method === 'POST'){
      const {ctx} = this;
      let search = ctx.request.body.search;
      await this.ctx.service.dictionary.dropXiehouyu();
      const data = fs.readFileSync('./app/data/json/xiehouyu.json');
      let res = data.toString();
      const list = JSON.parse(res);
      // console.log(userList);
      const fuse = new Fuse(list, {
        keys: ['riddle']
      });

      let result = fuse.search(search);
      await this.ctx.service.dictionary.insertXiehouyu(result);
      this.ctx.redirect('/xiehouyu');
    }

  }

  async xiehouyuList(){                                                 //歇后语分页
    let count = await this.ctx.service.dictionary.getXiehouyuCount();
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
    let categorys    = await this.ctx.service.dictionary.getXiehouyu(offset,limit);
    // console.log(categorys);
    await this.ctx.render('xiehouyu.html',{
        categorys,
        page,
        start,
        stop,
        pages,
        limit,
        count
    });

  }


  async word(){                                               //词语搜索
    if (this.ctx.request.method === 'POST'){
      const {ctx} = this;
      let search = ctx.request.body.search;
      await this.ctx.service.dictionary.dropWord();
      const data = fs.readFileSync('./app/data/json/word.json');
      let res = data.toString();
      const list = JSON.parse(res);
      // console.log(userList);
      const fuse = new Fuse(list, {
        keys: ['word']
      });
      // console.log(fuse.search('玉波'));

      let result = fuse.search(search);
      await this.ctx.service.dictionary.insertWord(result);
      this.ctx.redirect('/word');
    }

  }


  async wordList(){                                             //词语分页
    let count = await this.ctx.service.dictionary.wordCount();
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
    let categorys    = await this.ctx.service.dictionary.getWord(offset,limit);
    await this.ctx.render('word.html',{
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

module.exports = DictionaryController;
