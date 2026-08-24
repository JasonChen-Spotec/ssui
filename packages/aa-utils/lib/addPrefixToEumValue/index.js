"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefixNamespace = function prefixNamespace(types, namespace) {
  var resultActionTypes = {};
  Object.keys(types).forEach(function (key) {
    resultActionTypes[key] = namespace + "/" + types[key];
  });
  return resultActionTypes;
};
exports["default"] = prefixNamespace;