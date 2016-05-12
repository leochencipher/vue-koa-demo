/*
* @Author: fengyun2
* @Date:   2016-05-12 16:47:10
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 17:20:26
*/

'use strict';

let mongoose = require('mongoose');

let CommentSchema = require('./comment');
let TagSchema = require('./tag');

let Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema({
  tags: [{
    id: String,
    name: String
  }],
  title: {type: String},
  content: {type: String},
  pv: {type: Number, default: 0},
  ctime: {type: Date, default: Date.now()},
  mtime: {type: Date, default: Date.now()}
});

// pre是在执行save操作之前执行的函数,可以定义多个,并用next实现业务连接,不用next只会调用第一个。
// http://cnodejs.org/topic/50474141ac9200ab280a2ca7
ArticleSchema.pre('save', function (next) {
  if (this.isNew) {
    this.ctime = this.mtime = Date.now();
  } else {
    this.mtime = Date.now();
  }
  next && next();
});

// 静态方法
// 文章列表
ArticleSchema.statics.fetch = function (cb) {
  return this.find({}, cb);
};

ArticleSchema.statics.findById = function (id, cb) {
  return this.findOne({_id: id}, cb);
};

ArticleSchema.statics.limitQuery = function (count, id, cb) {
  return this.find({'_id': {"$gt": mongoose.Types.ObjectId(id)}}).limit(count).exec(cb);
};

/**
 * 获取近期最新文章列表, 默认5条
 * @param  {[type]}   count [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
ArticleSchema.statics.queryRecentArticles = function (count, cb) {
  if (typeof count === 'function') {
    cb = count;
    count = 5;
  }
  return this.find({}).limit(count).exec(cb);
};

module.exports = ArticleSchema;
