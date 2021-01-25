'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
 * @api {GET} /api/test 测试接口
 * @apiParam {String} user 文章名
 */
  async test() {
    const { ctx } = this;
    const res = '测试';
    ctx.body = res;
  }
}

module.exports = HomeController;
