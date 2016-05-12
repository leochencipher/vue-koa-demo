/*
* @Author: fengyun2
* @Date:   2016-05-12 21:28:04
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 21:29:14
*/

'use strict';

var mongoose = require('mongoose');
var TagSchema = require('../../db/schemas/tag');

module.exports = mongoose.model('Tag', TagSchema);
