'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');
const fs = require('fs');

class DictionaryController extends Controller {
  async index() {
    const { ctx } = this;
    let placeholder = "词语";
    await ctx.render('dictionaryIndex', {placeholder});
  }

  async idiomIndex(){
    const { ctx } = this;
    let placeholder = "成语";
    await ctx.render('idiomIndex', {placeholder});
  }

  async wordIndex(){
    const { ctx } = this;
    let placeholder = "汉字";
    await ctx.render('dictionaryIndex', {placeholder});
  }

  async xiehouyuIndex(){
    const { ctx } = this;
    let placeholder = "歇后语";
    await ctx.render('xiehouyuIndex', {placeholder});
  }

  async ci(){
    if (this.ctx.request.method === 'POST'){
          const {ctx} = this;
          let search = ctx.request.body.search;
          await this.ctx.service.dictionary.dropCi();
          const data = fs.readFileSync('./app/data/json/ci.json');
          let res = data.toString();
          const list = JSON.parse(res);
          // console.log(userList);
          const fuse = new Fuse(list, {
            keys: ['ci']
          });
          // console.log(fuse.search('玉波'));

          let result = fuse.search(search);
          await this.ctx.service.dictionary.insertCi(result);
          this.ctx.redirect('/dictionary');
        }
          // await this.ctx.render('dictionary',{result});
  }
  
  async ciList(){
    let count = await this.ctx.service.dictionary.getCiCount();
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
    // console.log(categorys);
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

  async idiom(){
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
      // console.log(fuse.search('玉波'));

      let result = fuse.search(search);
      await this.ctx.service.dictionary.insertIdiom(result);
      this.ctx.redirect('/idiom');
    }

  }

  async idiomList(){
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


  async xiehouyu(){
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
      // console.log(fuse.search('玉波'));

      let result = fuse.search(search);
      await this.ctx.service.dictionary.insertXiehouyu(result);
      this.ctx.redirect('/xiehouyu');
    }

  }

  async xiehouyuList(){
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




}

module.exports = DictionaryController;
