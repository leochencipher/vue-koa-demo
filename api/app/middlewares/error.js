/*
* @Author: fengyun2
* @Date:   2016-05-14 08:21:00
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-14 08:29:16
*/

/*http://www.tuicool.com/articles/Y7NnquR*/
'use strict';

const util = require('util');

exports.JsonError = JsonError;
exports.PageError = PageError;

function JsonError(message) {
  Error.call(this, message);
}
util.inherits(JsonError, Error);

function PageError(message) {
  Error.call(this, message);
}
util.inherits(PageError, Error);

module.exports = function () {
  return function* () {
    try {
      yield* next;
    } catch (e) {
      let status = e.status || 500;
      let message = e.message || '服务器错误';

      if (e instanceof JsonError) {// 错误是 json 错误
        this.body = {
          'status': status,
          'message': message
        };
        if (status == 500) {
          // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
          this.app.emit('error', e, this);
        }
        return ;
      }

      this.status = status;
      // 根据 status 渲染不同的页面
      if (status == 403) {
        this.body = yield this.body = '403';
      }
      if (status == 404) {
        this.body = yield this.body = '404';
      }
      if (status == 500) {
        this.body = yield this.body = '500';
        // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
        this.app.emit('error', e, this);
      }
  }
};
};
