/*
* @Author: fengyun2
* @Date:   2016-05-12 21:58:03
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-14 08:03:14
*/

'use strict';

var util = require('util');
var thunkify = require('thunkify-wrap');

var ArticleModel = require('../models/article');
var Tag = require('./tag');
var Archive = require('./archive');
var Category = require('./category');

/**
 * 获取文章列表
 * @yield {[type]} [description]
 */
exports.list = function* () {
  var articles = yield thunkify(ArticleModel.find, ArticleModel);
  this.body = articles;
};

/**
 * 新增文章
 * @yield {[type]} [description]
 */
exports.create = function* () {
  var info = this.request.body;
  var article = new ArticleModel(info);
  var result = yield thunkify(article.save, article);

  if (!result) {
    return this.body = '创建文章失败';
  }

  // 创建文件和标签链接关系[不做]
/*  yield info.tags.map(function (tag) {
    return Tag.link(tag, result[0]);
  });
*/
  this.body = '更新文章成功!';
};

/**
 * 更新文章
 * @yield {[type]} [description]
 */
exports.update = function* () {
  var articleId = this.params['articleId'];
  var result = yield thunkify(ArticleModel.findById, ArticleModel)(articleId);
  if (!result) {
    return this.body = '文章不存在!';
  }

  util._extend(result, this.request.body);

  result = yield thunkify(result.save, result);
  if(!result) {
    return this.body = '更新失败!';
  }
  this.body = '更新成功!';
};

exports.delete = function* () {
  var articleId = this.params['articleId'];
  var result = yield thunkify(ArticleModel.findById, ArticleModel)(articleId);
  if (!result) {
    return this.body = '该文章不存在!';
  }
  result = yield thunkify(result.remove, result);
  if (!result) {
    return this.body = '删除文章失败';
  }
  this.body = '删除文章成功';
};


exports.index = function* () {
  this.body = '这是article index 页面';
};
exports.show = function* () {
  this.body = '这是article show 页面';
};
exports.list = function* () {

};

