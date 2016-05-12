/*
* @Author: fengyun2
* @Date:   2016-05-12 21:30:03
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 21:31:22
*/

'use strict';

var mongoose = require('mongoose');
var UserSchema = require('../../db/schemas/user');
module.exports = mongoose.model('User', UserSchema);
