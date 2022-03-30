import queryString from 'qs';
import { compile } from 'path-to-regexp';

export const getQueryString = (qs: string = window.location.search): string => {
  if (qs && qs.charAt(0) === '?') {
    return qs.substr(1);
  }

  return '';
};

export const getQueryObject = (qs: string = getQueryString()): queryString.ParsedQs =>
  queryString.parse(qs);

export interface SearchQueryObject {
  path?: string;
  query?: queryString.ParsedQs;
}

export const getPathAndQueryObject = (search: string) => {
  const searchQueryObject: SearchQueryObject = {};

  if (search) {
    const [path, query] = search.split('?');
    searchQueryObject.path = path;
    searchQueryObject.query = getQueryObject(query);
    return searchQueryObject;
  }
  return searchQueryObject;
};

export const toQueryString = (object: Record<string, any>): string =>
  `?${queryString.stringify(object, { encode: true })}`;

export const urlToList = (url: string): string[] => {
  const urlList = url.split('/').filter((i) => i);
  return urlList.map((_, index) => `/${urlList.slice(0, index + 1).join('/')}`);
};

type paramsMap = Record<string, string | number>;

export const toPath = (url: string, params: paramsMap): string => compile(url)(params);

export default {
  getQueryString,
  getQueryObject,
  getPathAndQueryObject,
  toQueryString,
  urlToList,
  toPath,
};
