/*
 * @author ycjcl868
 * @date 2018/08/15
 * @description Hello Controller
 */
'use strict';

const Controller = require('egg').Controller;

class ArtivityController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      Hello: 'World',
    };
  }
}

module.exports = ArtivityController;
