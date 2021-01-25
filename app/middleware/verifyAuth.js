'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const excludeUrls = ctx.app.config.auth.exclude || [];
    const errorCode = ctx.app.config.auth.errorCode || -1;
    const url = ctx.request.url;

    let shouldVerify = true; // 是否需要验证，默认需要验证
    for (let i = 0; i < excludeUrls.length; i++) {
      const excludeItemUrl = excludeUrls[i];
      if (url.indexOf(excludeItemUrl) > -1) {
        shouldVerify = false;
        break;
      }
    }
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

    if (shouldVerify) {
      if (!ctx.request.header.authorization) {
        ctx.body = {
          code: errorCode,
          data: '',
          message: 'authorization为空',
        };
        return;
      }
      await next();

    } else {
      await next();
    }
  };
};
