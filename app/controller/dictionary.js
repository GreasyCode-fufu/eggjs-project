'use strict';

const Controller = require('egg').Controller;
const Fuse = require('fuse.js');
const fs = require('fs');

class DictionaryController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('dictionary');
  }

  async ci(){
    const {ctx} = this;
    let search = ctx.request.body.search;
    const data = fs.readFileSync('./app/data/json/ci.json');
    let res = data.toString();
    const list = JSON.parse(res);
    // console.log(userList);
    const fuse = new Fuse(list, {
      keys: ['ci']
    });
    console.log(fuse.search('玉波'));

  }
}

module.exports = DictionaryController;
