'use strict';

const Service = require('egg').Service;
const Fuse = require('fuse.js');
const fs = require('fs');

class TestService extends Service {
  async Array(search) {
    const data = fs.readFileSync('./app/data/json/xiehouyu.json');
    let res = data.toString();
    const list = JSON.parse(res);
    const fuse = new Fuse(list, {
      keys: ['riddle']
    });

    return fuse.search(search);

  }

  async idiom(search) {
    const data = fs.readFileSync('./app/data/json/idiom.json');
    let res = data.toString();
    const list = JSON.parse(res);
    const fuse = new Fuse(list, {
      keys: ['word', 'abbreviation']
    });

    return fuse.search(search);

  }


  
  async word(search) {
    const data = fs.readFileSync('./app/data/json/word.json');
    let res = data.toString();
    const list = JSON.parse(res);
    const fuse = new Fuse(list, {
      keys: ['word']
    });

    return fuse.search(search);

  }

  async ci(search) {
    const data = fs.readFileSync('./app/data/json/ci.json');
    let res = data.toString();
    const list = JSON.parse(res);
    const fuse = new Fuse(list, {
      keys: ['ci']
    });

    return fuse.search(search);

  }





}

module.exports = TestService;
