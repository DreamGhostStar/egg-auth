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

+ Verify whether the routing table contains the requested URL in the egg project

+ In the egg project, verify whether the user's JWT login exists in the licensed route

+ Verify the parameters of the route

[中文](./README.zh_CN.md)

## Install

```bash
$ npm i egg-router-auth --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-router-auth',
};
```

```json
// package.json
{
  "scripts": {
    "apidoc": "apidoc -i app/controller/ -o apidoc/"
  },
}
```

```js
// {app_root}/config/config.default.js
config.auth = {
  jwtExclude: ['/api/login', '/api/public/verification'], // route to skip to verify user login
  errorCode: -2, // wrong code
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Usage

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

## Questions & Suggestions

Please open an issue [here](https://github.com/DreamGhostStar/egg-router-auth/issues).

## License

[MIT](LICENSE)