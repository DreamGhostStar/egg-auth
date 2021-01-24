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

Verify whether the routing table contains the requested URL in the egg project

In the egg project, verify whether the user's JWT login exists in the licensed route

## Install

```bash
$ npm i egg-auth --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-auth',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
config.auth = {
  exclude: ['/api/login', '/api/public/verification'], // 需要跳过的路由
  errorCode: -2, // 错误的code
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
