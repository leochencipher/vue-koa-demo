/*
* @Author: fengyun2
* @Date:   2016-05-12 16:31:21
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 16:34:00
*/

'use strict';

let mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String}
});

UserSchema.statics = {
  findByName: function (name, cb) {
    return this.findOne({email: name}, cb);
  }
};
module.exports = UserSchema;
