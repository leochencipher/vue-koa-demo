/*
* @Author: fengyun2
* @Date:   2016-05-12 17:20:46
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 17:25:12
*/

'use strict';

let mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content: {type: String},
  author: {type: String}
});

CommentSchema.statics = {

};

module.exports = CommentSchema;
