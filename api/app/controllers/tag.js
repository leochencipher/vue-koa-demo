/*
* @Author: fengyun2
* @Date:   2016-05-12 21:27:17
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 23:23:42
*/

'use strict';

var util = require('util');

var thunkify = require('thunkify-wrap');
var parse = require('co-body');

var TagModel = require('../models/tag');
var Category = require('./category');

// 获取标签列表
exports.list = function* () {
  let tags = yield thunkify(TagModel.find, TagModel)();
  this.body = tags;
  // this.send(tags, 0);
};

// 创建标签
exports.create = function* () {
  // promise
  parse(this,{ textTypes: ['text', 'html', 'text/json'] }).then(function (info) {

  }, function (err) {
    console.err.bind(console, err);
  });
  console.log('info: ', info);
  return ;
  var result = yield thunkify(TagModel.findByName, TagModel)(info.name);
  if (result) {
    // this.send(result, 0);
    this.body = result;
    return ;
  }
  var tag = new TagModel(info);
  result = yield thunkify(tag.save, tag);

  console.log(tag);
  // this.send(result[0], 0);
  this.body = tag;
};

exports.show = function* () {
  var tagId = yield this.params['tagUd'];
  var result = yield thunkify(TagModel.findById, TagModel)(tagId);
  if(!result) {
    this.body = '标签不存在';

    console.log('this: ', this);
    return;
    // return this.send(null, 1, "标签不存在");
  }
  var category = yield Category.list();
  console.log('result: ', result);

  yield this.body = {title: result.name, tag: result, category: category};

    // yield this.send({title: result.name, tag: result, category: category});
};
