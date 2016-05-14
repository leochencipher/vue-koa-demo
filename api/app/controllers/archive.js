/*
* @Author: fengyun2
* @Date:   2016-05-12 21:58:48
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-14 08:12:42
*/

'use strict';

var util = require('util');

var thunkify = require('thunkify-wrap');
var moment = require('moment');

var ArticleModel = require('../models/archive');
var Category = require('./category');

/**
 * 归档文章列表页
 * @yield {[type]} [description]
 */
exports.show = function* () {
  var archiveId = this.params['archiveId'];
  var result = yield thunkify(ArchiveModel.findById, ArchiveModel)(archiveId);
  if (!result) {
    return this.body = '归档不存在';
  }
  var category = yield Category.list();
  return yield  {
    title: moment(parseInt(result.name)).format('YYYY年M月'),
    archive: result,
    category: category
  };
};
exports.list = function* () {

};
