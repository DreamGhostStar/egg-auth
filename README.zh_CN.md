# egg-router-auth

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-router-auth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-router-auth
[travis-image]: https://img.shields.io/travis/eggjs/egg-router-auth.svg?style=flat-square
[travis-url]: https://travis-ci.com/github/DreamGhostStar/egg-router-auth
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-router-auth.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-router-auth?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-router-auth.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-router-auth
[snyk-image]: https://snyk.io/test/npm/egg-router-auth/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-router-auth
[download-image]: https://img.shields.io/npm/dm/egg-router-auth.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-router-auth

+ 在egg项目中验证路由表中是否包含请求的url

+ 在egg项目中验证在许可的路由中是否存在用户的jwt登录

+ 验证路由的参数

[英文](./README.md)

## 开启插件

```js
// config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-router-auth',
};
```

## 使用场景

在egg项目中验证路由表中是否包含请求的url

在egg项目中验证在许可的路由中是否存在用户的jwt登录

## 配置

```js
// config/config.default.js
config.auth = {
  jwtExclude: ['/api/login', '/api/public/verification'], // 验证用户登录需要跳过的路由
  errorCode: -2, // 错误的code
}
```

现在我们如果请求 `/api/login/note` 就会被跳过，如果请求 `/api/test` 就需要验证jwt是否存在

```json
// package.json
{
  "scripts": {
    "apidoc": "apidoc -i app/controller/ -o apidoc/"
  },
}
```

在每次监听到 `/app/controller` 有文件内容发送改变后，会自动生成apidoc文档，以便在中间件中验证参数的正确性

## 使用

```js
/**
 * @api {GET} /api/test 测试接口
 * @apiParam {String} user 文章名
 */
  async test() {
    const { ctx } = this;
    const res = '测试';
    ctx.body = res;
  }
```

插件会检测 url 为 `/api/test` 并且 method 为 `GET` 的请求，验证其参数是否正确

## 提问交流

请到 [egg issues](https://github.com/DreamGhostStar/egg-router-auth/issues) 异步交流。

## License

[MIT](LICENSE)