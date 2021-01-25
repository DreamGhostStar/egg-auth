'use strict';
const fs = require('fs');

module.exports = app => {
  fs.watch('./app/controller', {
    recursive: true,
  }, () => {
    console.warn(new Date(), ' 检测到文件变化，正在执行编译命令...');
    const exec = require('child_process').exec;
    const cmdStr = 'npm run apidoc';
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
