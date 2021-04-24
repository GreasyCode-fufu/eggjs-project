'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };

// /config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

