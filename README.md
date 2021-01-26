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

## 开启插件

```js
// config/plugin.js
exports.auth = {
  enable: true,
  package: 'egg-router-auth',
};
```

## 使用场景

+ 在egg项目中验证路由表中是否包含请求的url

+ 在egg项目中验证在许可的路由中是否存在用户的jwt登录

+ 验证路由的参数

## 配置

```js
// config/config.default.js
config.auth = {
  jwtExclude: ['/api/login', '/api/public/verification'], // 验证用户登录需要跳过的路由
  errorCode: -2, // 错误的code
}
```

配置成功后如果请求 `/api/login/note` 就会被跳过，如果请求 `/api/test` 就需要验证jwt是否存在

```json
// package.json
{
  "scripts": {
    "apidoc": "apidoc -i app/controller/ -o apidoc/output -t apidoc/template"
  },
}
```

`-i` 表明了 `apidoc` 会将目录中的apidoc参数解析成json格式

`-o` 表示 `apidoc` 输出的目录

`-t` 表示 `apidoc` 输出的模板，模板可以参照 [apidoc](https://apidocjs.com/) 进行配置，不过，`api_data.json` 必须拥有，因为它是这个插件的核心

文件目录需按此配置

```
project
├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── apidoc
│   └── output
|       └── api_data.json
│   └── template
|       └── api_data.json
|
|...
```

在每次监听到 `/app/controller` 有文件内容发送改变后，会自动生成apidoc文档，以便在中间件中验证参数的正确性

## apiParam 使用说明

写法|说明|正确示例|错误示例
-|-|-|-
`string` | 字符串 | `xxx` | `-`
`number` | 数字 | `123` | `123xssx`
`boolean` | 布尔值 | `true` | `truexsa`

## 使用

```js
/**
 * @api {GET} /api/test 测试接口
 * @apiParam {string} user 用户名
 */
  async test() {
    const { ctx } = this;
    const res = '测试';
    ctx.body = res;
  }
```

> `apiParam` 的参数类型可不区分大小写

插件会检测 url 为 `/api/test` 并且 method 为 `GET` 的请求，验证其参数是否正确

## 提问交流

请到 [egg-router-auth issues](https://github.com/DreamGhostStar/egg-router-auth/issues) 异步交流。

## License

[MIT](LICENSE)