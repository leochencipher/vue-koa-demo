/*
* @Author: fengyun2
* @Date:   2016-05-12 16:34:37
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 16:46:26
*/

'use strict';

var mongoose = require('mongoose');

var ArchiveSchema = new mongoose.Schema({
  name: {type: String},
  articles: [{
    id: String,
    title: String
  }],
  ctime: {type: Date, default: Date.now()},
  mtime: {type: Date, default: Date.now()}
});

// pre是在执行save操作之前执行的函数,可以定义多个,并用next实现业务连接,不用next只会调用第一个。
// http://cnodejs.org/topic/50474141ac9200ab280a2ca7
ArchiveSchema.pre('save', function (next) {
  if (this.isNew) {
    this.ctime = this.mtime = Date.now();
  } else {
    this.mtime = Date.now();
  }
  next && next();
});

// 定义静态方法

ArchiveSchema.statics.findByName = function (name, cb) {
  return this.findOne({name: name}, cb);
};

ArchiveSchema.statics.findAll = function (cb) {
  return this.find({}, cb);
};

ArchiveSchema.statics.findById = function (id, cb) {
  return this.findOne({_id: id}, cb);
};

module.exports = ArchiveSchema;

