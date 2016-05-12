/*
* @Author: fengyun2
* @Date:   2016-05-12 17:36:26
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 22:14:38
*/

'use strict';

var util = require('util');
var fs = require('fs');
var path = require('path');

var thunkify = require('thunkify-wrap');

exports.show = function* () {
  // yield this.send('我是about页面!', 0);
  // this.body = '我是about页面!';
  var arrs = [{username: "张三", age: 20},{username: "李四", age: 25}];
  this.body = {title: "我是about页面", users: arrs};
};
