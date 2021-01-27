'use strict';

module.exports = {
  returnErrorInfo(errorCode, data, message) {
    return {
      code: errorCode,
      data,
      message,
    };
  },
  isNumber(val, method) { // 转为数字
    const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
    const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    }
    return false;
  },
  isBoolean(val, method) {
    if (method === 'get') {
      return val === 'true' || val === 'false';
    }
    return typeof val === 'boolean';
  },
  isString(val, method) {
    return typeof val === 'string';
  },
  isNull(val, method) {
    if (method === 'get') {
      return val === 'null';
    }
    return val === null;
  },
  isUndefined(val, method) {
    return val === undefined
  },
  isBooleanArray(vals) {
    if (!Array.isArray(vals)) {
      return false
    }
    for (let i = 0; i < vals.length; i++) {
      const val = vals[i];
      if (typeof val !== 'boolean') {
        return false
      }
    }

    return true
  },
  isStringArray(vals) {
    if (!Array.isArray(vals)) {
      return false
    }
    for (let i = 0; i < vals.length; i++) {
      const val = vals[i];
      if (typeof val !== 'string') {
        return false
      }
    }

    return true
  },
  isNumberArray(vals) {
    if (!Array.isArray(vals)) {
      return false
    }
    for (let i = 0; i < vals.length; i++) {
      const val = vals[i];
      if (typeof val !== 'number') {
        return false
      }
    }

    return true
  },
  isObjectArray(vals) {
    if (!Array.isArray(vals)) {
      return false
    }
    for (let i = 0; i < vals.length; i++) {
      const val = vals[i];
      if (val.constructor === Object) {
        return false
      }
    }

    return true
  },
  isObject(val) {
    return val.constructor === Object
  },
  isArray(vals) {
    return Array.isArray(vals)
  }
};