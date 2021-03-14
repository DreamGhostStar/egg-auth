'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const enableJwtVerify = ctx.app.config.auth.enableJwtVerify
    const enable = enableJwtVerify === undefined ? true : enableJwtVerify
    const excludeUrls = ctx.app.config.auth.jwtExclude || [];
    const errorCode = ctx.app.config.auth.errorCode || -1;
    const url = ctx.request.url;

    // 如果不进行jwt验证，直接进行下一个中间件的进行
    if (!enable) {
      await next();
      return
    }

    let shouldVerify = true; // 是否需要验证，默认需要验证
    for (let i = 0; i < excludeUrls.length; i++) {
      const excludeItemUrl = excludeUrls[i];
      if (url.indexOf(excludeItemUrl) > -1) {
        shouldVerify = false;
        break;
      }
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