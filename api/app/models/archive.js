/*
* @Author: fengyun2
* @Date:   2016-05-12 21:36:53
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 21:38:06
*/

'use strict';

var mongoose = require('mongoose');
var ArchiveSchema = require('../../db/schemas/archive');
module.exports = mongoose.model('Archive', ArchiveSchema);
