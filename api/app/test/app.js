/*
* @Author: fengyun2
* @Date:   2016-05-12 23:03:27
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-12 23:34:04
*/

var app     = require('koa')(),
    router  = require('koa-router')(),
    koaBody = require('koa-body')();

router.post('/users', koaBody,
  function *(next) {
    console.log(this.request.body);
    // => POST body
    this.body = JSON.stringify(this.request.body);
  }
);

app.use(router.routes());

app.listen(3000);
