'use strict';

module.exports = {
  returnErrorInfo(errorCode, data, message) {
    return {
      code: errorCode,
      data,
      message
    }
  },
  isNumber(val, _method) { // 转为数字
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  isBoolean(val, method) {
    if(method === 'get'){
      return val === 'true' || val === 'false'
    }
    return typeof val === 'boolean'
  },
  isString(val, _method) {
    return typeof val === 'string'
  },
  isNull(val, method) {
    if(method === 'get'){
      return val === 'null'
    }
    return val === null
  }
};