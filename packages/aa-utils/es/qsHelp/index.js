import queryString from 'qs';
import { compile } from 'path-to-regexp';
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
    var _search$split = search.split('?'),
      path = _search$split[0],
      query = _search$split[1];
    searchQueryObject.path = path;
    searchQueryObject.query = getQueryObject(query);
    return searchQueryObject;
  }
  return searchQueryObject;
};
export var toQueryString = function toQueryString(object) {
  return "?" + queryString.stringify(object, {
    encode: true
  });
};
export var urlToList = function urlToList(url) {
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (_, index) {
    return "/" + urlList.slice(0, index + 1).join('/');
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
  toPath: toPath
};