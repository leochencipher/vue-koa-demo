/*
* @Author: fengyun2
* @Date:   2016-05-12 16:15:47
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 16:30:33
*/

/* 数据库连接 */

'use strict';

let mongoose = require('mongoose');
let config = require('../config/config');

var db = mongoose.connect("mongoose://" + config.MongoDB.HOST + ":" + config.MongoDB.PORT + '/test');

// 数据库连接
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (callback) {
  console.log('数据库连接成功!');
});


module.exports = db;
