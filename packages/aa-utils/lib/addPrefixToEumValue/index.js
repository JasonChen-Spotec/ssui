"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefixNamespace = function prefixNamespace(types, namespace) {
  var resultActionTypes = {};
  Object.keys(types).forEach(function (key) {
    resultActionTypes[key] = "".concat(namespace, "/").concat(types[key]);
  });
  return resultActionTypes;
};
exports["default"] = prefixNamespace;