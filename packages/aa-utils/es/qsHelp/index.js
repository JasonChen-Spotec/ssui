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
import { compile } from 'path-to-regexp';
import queryString from 'qs';
var isServerSide = function isServerSide() {
  return typeof XMLHttpRequest === 'undefined';
};
export var getQueryString = function getQueryString(qs) {
  var paramsQs = qs;
  if (!isServerSide() && !paramsQs) {
    paramsQs = window.location.search;
  }
  if (paramsQs && paramsQs.charAt(0) === '?') {
    return paramsQs.substr(1);
  }
  return '';
};
export var getQueryObject = function getQueryObject(qs) {
  if (qs === void 0) {
    qs = getQueryString();
  }
  return queryString.parse(qs);
};
export var getPathAndQueryObject = function getPathAndQueryObject(search) {
  var searchQueryObject = {};
  if (search) {
    var _a = __read(search.split('?'), 2),
      path = _a[0],
      query = _a[1];
    searchQueryObject.path = path;
    searchQueryObject.query = getQueryObject(query);
    return searchQueryObject;
  }
  return searchQueryObject;
};
export var toQueryString = function toQueryString(object) {
  return '?'.concat(
    queryString.stringify(object, {
      encode: true,
    }),
  );
};
export var urlToList = function urlToList(url) {
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (_, index) {
    return '/'.concat(urlList.slice(0, index + 1).join('/'));
  });
};
export var toPath = function toPath(url, params) {
  return compile(url)(params);
};
export default {
  getQueryString: getQueryString,
  getQueryObject: getQueryObject,
  getPathAndQueryObject: getPathAndQueryObject,
  toQueryString: toQueryString,
  urlToList: urlToList,
  toPath: toPath,
};
