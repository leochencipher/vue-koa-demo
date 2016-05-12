/*
* @Author: fengyun2
* @Date:   2016-05-12 21:27:17
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-13 00:46:48
*/

'use strict';

var util = require('util');

var thunkify = require('thunkify-wrap');

var TagModel = require('../models/tag');
var Category = require('./category');

// 获取标签列表
exports.list = function* () {
  let tags = yield thunkify(TagModel.find, TagModel)();
  this.body = tags;
  // this.send(tags, 0);
};

/**
 * 创建标签
 * @yield {[type]} [description]
 * curl -d "id=5&name=ly" http://127.0.0.1/tag/add
 */
exports.create = function* () {
  var info = this.request.body;
  var result = yield thunkify(TagModel.findByName, TagModel)(info.name);
  if (result) {
    // this.send(result, 0);
    this.body = result;
    return ;
  }
  info = { articles: {id: info.id, title: info.name }, name: info.name};
  var tag = new TagModel(info);
  console.log('tag: ', tag);
  result = yield thunkify(tag.save, tag);

  console.log(tag);
  // this.send(result[0], 0);
  this.body = tag;
};

exports.show = function* () {
  var tagId = this.params['tagId'];

  var result = yield thunkify(TagModel.findById, TagModel)(tagId);
  if(!result) {
    this.body = '标签不存在';

    // console.log('this: ', this);
    return;
    // return this.send(null, 1, "标签不存在");
  }
  var category = yield Category.list();
  // console.log('result: ', result);

  yield this.body = {title: result.name, tag: result, category: category};

    // yield this.send({title: result.name, tag: result, category: category});
};
