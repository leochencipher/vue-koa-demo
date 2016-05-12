/*
* @Author: fengyun2
* @Date:   2016-05-12 23:03:27
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 23:22:50
*/

'use strict';

var koa = require('koa');
var route = require('koa-route');
var parse = require('co-body');
var app = new koa();

app.use(route.post('/test', function* () {
  var data = parse(this,{ textTypes: ['text', 'html', 'text/json'] }).then(function (value) {
      console.log('222===========222');

    console.log(value);
    console.log(value.id);
  console.log('222===========222');
  }, function (err) {
    console.log(err);
  });
  console.log('===========');
  console.log('data: ', data);
  console.log('===========');
}));

app.listen(3000);
