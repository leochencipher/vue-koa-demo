/*
* @Author: fengyun2
* @Date:   2016-05-12 21:33:27
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 21:35:06
*/

'use strict';

var mongoose = require('mongoose');
var ArticleSchema = require('../../db/schemas/article');
module.exports = mongoose.model('Article', ArticleSchema);
