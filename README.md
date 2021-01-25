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
[travis-url]: https://travis-ci.org/eggjs/egg-router-auth
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-router-auth.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-router-auth?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-router-auth.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-router-auth
[snyk-image]: https://snyk.io/test/npm/egg-router-auth/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-router-auth
[download-image]: https://img.shields.io/npm/dm/egg-router-auth.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-router-auth

Verify whether the routing table contains the requested URL in the egg project

In the egg project, verify whether the user's JWT login exists in the licensed route

## Install

```bash
$ npm i egg-router-auth --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-router-auth',
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

Please open an issue [here](https://github.com/DreamGhostStar/egg-router-auth/issues).

## License

[MIT](LICENSE)