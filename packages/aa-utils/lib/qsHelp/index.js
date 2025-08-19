'use strict';

var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toPath =
  exports.urlToList =
  exports.toQueryString =
  exports.getPathAndQueryObject =
  exports.getQueryObject =
  exports.getQueryString =
    void 0;
var qs_1 = __importDefault(require('qs'));
var path_to_regexp_1 = require('path-to-regexp');
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
  return qs_1['default'].parse(qs);
};
exports.getQueryObject = getQueryObject;
var getPathAndQueryObject = function getPathAndQueryObject(search) {
  var searchQueryObject = {};
  if (search) {
    var _a = __read(search.split('?'), 2),
      path = _a[0],
      query = _a[1];
    searchQueryObject.path = path;
    searchQueryObject.query = (0, exports.getQueryObject)(query);
    return searchQueryObject;
  }
  return searchQueryObject;
};
exports.getPathAndQueryObject = getPathAndQueryObject;
var toQueryString = function toQueryString(object) {
  return '?'.concat(
    qs_1['default'].stringify(object, {
      encode: true,
    }),
  );
};
exports.toQueryString = toQueryString;
var urlToList = function urlToList(url) {
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (_, index) {
    return '/'.concat(urlList.slice(0, index + 1).join('/'));
  });
};
exports.urlToList = urlToList;
var toPath = function toPath(url, params) {
  return (0, path_to_regexp_1.compile)(url)(params);
};
exports.toPath = toPath;
exports['default'] = {
  getQueryString: exports.getQueryString,
  getQueryObject: exports.getQueryObject,
  getPathAndQueryObject: exports.getPathAndQueryObject,
  toQueryString: exports.toQueryString,
  urlToList: exports.urlToList,
  toPath: exports.toPath,
};
