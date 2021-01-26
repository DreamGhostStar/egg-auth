'use strict';
const fs = require('fs');

module.exports = () => {
  return async (ctx, next) => {
    const errorCode = ctx.app.config.auth.errorCode || -1; // 用户规定的错误code
    const url = ctx.req._parsedUrl.pathname; // 请求url
    const method = ctx.request.method; // 请求方法

    // 检测路由表中是否含有该路由
    let isHasUrl = false; // 路由中是否包含该url，默认未包含
    for (let i = 0; i < ctx.app.router.stack.length; i++) {
      const pathItem = ctx.app.router.stack[i];
      if (pathItem.path === url) {
        isHasUrl = true;
        break;
      }
    }

    if (!isHasUrl) {
      ctx.body = {
        code: errorCode,
        data: '',
        message: '路由表中未包含该路由',
      };
      return;
    }

    // 获取apidoc编译生成的json
    const apiParamConfigList = JSON.parse(fs.readFileSync('./apidoc/output/api_data.json', 'utf-8'));
    let apiParam = null;

    // 将获取到的json与传递的url和method进行比较
    for (let i = 0; i < apiParamConfigList.length; i++) {
      const apiParamConfigItem = apiParamConfigList[i];
      if (apiParamConfigItem.url === url &&
        apiParamConfigItem.type.toLowerCase() === method.toLowerCase()) {
        apiParam = apiParamConfigItem;
        break;
      }
    }

    if (!apiParam) {
      await next();
      return;
    }

    // 获取传递的参数
    const query = apiParam.type.toLowerCase() === 'get' ? ctx.query : ctx.request.body;

    // 参数对比map
    const transformMap = {
      string: ctx.isString,
      number: ctx.isNumber,
      boolean: ctx.isBoolean
    }

    // 进行参数对比
    for (let i = 0; i < apiParam.parameter.fields.Parameter.length; i++) {
      const paramItemConfig = apiParam.parameter.fields.Parameter[i];
      if (!transformMap[paramItemConfig.type.toLowerCase()](query[paramItemConfig.field])) {
        ctx.body = {
          code: errorCode,
          data: '',
          message: `${paramItemConfig.field} 参数类型错误`,
        };
        return;
      }
    }

    await next();
  };
};