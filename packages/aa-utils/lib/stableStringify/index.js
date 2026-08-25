"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lodash_1 = require("lodash");
/**
 * 稳定 JSON 序列化
 * 处理普通对象、数组和基础类型，满足下拉框 value 的稳定 stringify 需求
 */
var _stableStringify = function stableStringify(val) {
  // 1. 保留 undefined 和 function 的真实样貌
  if (val === undefined) return 'undefined';
  if (typeof val === 'function') return val.toString();
  // 2. 数组：保持顺序，递归内部
  if (Array.isArray(val)) {
    return "[" + val.map(function (item) {
      return _stableStringify(item);
    }).join(',') + "]";
  }
  // 3. 对象：仅对对象的键（Key）进行排序，保证 {a:1,b:2} 和 {b:2,a:1} 匹配一致
  if ((0, lodash_1.isObject)(val) && val !== null) {
    return "{" + Object.keys(val).sort().map(function (key) {
      return "\"" + key + "\":" + _stableStringify(val[key]);
    }).join(',') + "}";
  }
  // 4. 基础类型（string, number, boolean, null）直接使用原生序列化
  return JSON.stringify(val);
};
exports["default"] = _stableStringify;