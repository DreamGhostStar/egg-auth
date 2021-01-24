# egg-auth

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-auth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-auth
[travis-image]: https://img.shields.io/travis/eggjs/egg-auth.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-auth
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-auth.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-auth?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-auth.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-auth
[snyk-image]: https://snyk.io/test/npm/egg-auth/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-auth
[download-image]: https://img.shields.io/npm/dm/egg-auth.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-auth

在egg项目中验证路由表中是否包含请求的url

在egg项目中验证在许可的路由中是否存在用户的jwt登录

## 依赖说明

## 开启插件

```js
// config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-auth',
};
```

## 使用场景

在egg项目中验证路由表中是否包含请求的url

在egg项目中验证在许可的路由中是否存在用户的jwt登录

## 示例

```js
config.auth = {
  exclude: ['/api/login', '/api/public/verification'], // 需要跳过的路由
  errorCode: -2, // 错误的code
}
```

现在我们如果请求 `/api/login/note` 就会被跳过，如果请求 `/api/test` 就需要验证jwt是否存在

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)