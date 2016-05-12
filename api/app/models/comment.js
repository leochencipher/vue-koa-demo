/*
* @Author: fengyun2
* @Date:   2016-05-12 21:35:16
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 21:36:38
*/

'use strict';

var mongoose = require('mongoose');
var CommentSchema = require('../../db/schemas/comment');
module.exports = mongoose.model('Comment', CommentSchema);
