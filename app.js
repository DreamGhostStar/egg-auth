'use strict';
const fs = require('fs');

module.exports = app => {
  fs.watch('./app/controller', {
    recursive: true,
  }, () => {
    console.warn(new Date(), ' 检测到文件变化，正在执行编译命令...');
    if (!app.config.auth.output) {
      console.error(new Date(), 'output参数必须配置')
      return
    }
    // apidoc 输出
    const output = app.config.auth.output ? `-o ${app.config.auth.output}` : ''
    // apidoc 模板
    const template = app.config.auth.template ? `-t ${app.config.auth.template}` : ''
    const exec = require('child_process').exec;

    // 将要执行的命令
    const cmdStr = `apidoc -i app/controller/ ${output} ${template}`;
    exec(cmdStr, (err, stdout) => {
      if (err) {
        console.log(err);
        console.error(new Date(), ' API文档编译命令执行失败');
      } else {
        console.log(stdout);
        console.warn(new Date(), ' API文档编译命令执行成功');
      }
    });
  });

  const index = app.config.coreMiddleware.length;

  app.config.coreMiddleware.splice(index, 0, 'verifyAuth', 'verifyParams');
};