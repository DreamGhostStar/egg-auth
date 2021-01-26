'use strict';

module.exports = {
  isNumber(val) { // 转为数字
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  isBoolean(val) {
    return val === 'true' || val === 'false'
  },
  isString(val) {
    return typeof val === 'string'
  }
};