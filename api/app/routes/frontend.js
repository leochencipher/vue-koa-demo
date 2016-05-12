/*
* @Author: fengyun2
* @Date:   2016-05-12 17:40:04
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 17:41:53
*/

'use strict';

var User = require('../controllers/user');
var About = require('../controllers/about');

module.exports = function (router) {
  // 关于我
  router.get('/about', About.show);
};
