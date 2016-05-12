/*
* @Author: fengyun2
* @Date:   2016-05-12 17:40:04
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 22:34:35
*/

'use strict';

var User = require('../controllers/user');
var Article = require('../controllers/article');
var Tag = require('../controllers/tag');
var About = require('../controllers/about');
var Archive = require('../controllers/archive');


module.exports = function (router) {

  // 首页,和文章列表页的内容相同
  router.get('/', Article.index);

  // 获取文章列表
  router.get('/articles', Article.index);

  // 查询文章详情
  router.get('/article/:articleId', Article.show);

  router.get('/tag', Tag.list);

  // 获取分类文章列表
  router.get('/tag/:tagId', Tag.show);

  // 添加标签

  router.post('/tag/add', Tag.create);

  // 获取归档文章列表
  router.get('/archtive/:archiveID', Archive.show);

  // 关于我
  router.get('/about', About.show);
};
