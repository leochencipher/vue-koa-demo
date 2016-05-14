/*
* @Author: fengyun2
* @Date:   2016-05-14 08:32:44
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-05-14 08:33:02
*/

'use strict';

var util = require('util');

/*
 * 校验会话
 */
module.exports = function () {
  return function* (next) {
    if (!this.session || !this.session.user) {
      this.send(null,999,"会话失效");
      return;
    }
    yield next;
  };
};
