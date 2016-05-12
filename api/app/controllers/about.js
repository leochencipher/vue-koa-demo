/*
* @Author: fengyun2
* @Date:   2016-05-12 17:36:26
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 17:42:16
*/

'use strict';

var util = require('util');
var fs = require('fs');
var path = require('path');

var thunkify = require('thunkify-wrap');

exports.show = function* () {
  yield this.send('我是about页面!');
};
