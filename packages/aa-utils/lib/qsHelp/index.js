"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPath = exports.urlToList = exports.toQueryString = exports.getPathAndQueryObject = exports.getQueryObject = exports.getQueryString = void 0;
var tslib_1 = require("tslib");
var qs_1 = tslib_1.__importDefault(require("qs"));
var path_to_regexp_1 = require("path-to-regexp");
var isServerSide = function isServerSide() {
  return typeof XMLHttpRequest === 'undefined';
};
var getQueryString = function getQueryString(qs) {
  var paramsQs = qs;
  if (!isServerSide() && !paramsQs) {
    paramsQs = window.location.search;
  }
  if (paramsQs && paramsQs.charAt(0) === '?') {
    return paramsQs.substr(1);
  }
  return '';
};
exports.getQueryString = getQueryString;
var getQueryObject = function getQueryObject(qs) {
  if (qs === void 0) {
    qs = (0, exports.getQueryString)();
  }
  return qs_1["default"].parse(qs);
};
exports.getQueryObject = getQueryObject;
var getPathAndQueryObject = function getPathAndQueryObject(search) {
  var searchQueryObject = {};
  if (search) {
    var _search$split = search.split('?'),
      path = _search$split[0],
      query = _search$split[1];
    searchQueryObject.path = path;
    searchQueryObject.query = (0, exports.getQueryObject)(query);
    return searchQueryObject;
  }
  return searchQueryObject;
};
exports.getPathAndQueryObject = getPathAndQueryObject;
var toQueryString = function toQueryString(object) {
  return "?" + qs_1["default"].stringify(object, {
    encode: true
  });
};
exports.toQueryString = toQueryString;
var urlToList = function urlToList(url) {
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (_, index) {
    return "/" + urlList.slice(0, index + 1).join('/');
  });
};
exports.urlToList = urlToList;
var toPath = function toPath(url, params) {
  return (0, path_to_regexp_1.compile)(url)(params);
};
exports.toPath = toPath;
exports["default"] = {
  getQueryString: exports.getQueryString,
  getQueryObject: exports.getQueryObject,
  getPathAndQueryObject: exports.getPathAndQueryObject,
  toQueryString: exports.toQueryString,
  urlToList: exports.urlToList,
  toPath: exports.toPath
};