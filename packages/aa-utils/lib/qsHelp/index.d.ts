import queryString from 'qs';
export declare const getQueryString: (qs?: string) => string;
export declare const getQueryObject: (qs?: string) => queryString.ParsedQs;
export interface SearchQueryObject {
  path?: string;
  query?: queryString.ParsedQs;
}
export declare const getPathAndQueryObject: (search: string) => SearchQueryObject;
export declare const toQueryString: (object: Record<string, any>) => string;
export declare const urlToList: (url: string) => string[];
type paramsMap = Record<string, string | number>;
export declare const toPath: (url: string, params: paramsMap) => string;
declare const _default: {
  getQueryString: (qs?: string) => string;
  getQueryObject: (qs?: string) => queryString.ParsedQs;
  getPathAndQueryObject: (search: string) => SearchQueryObject;
  toQueryString: (object: Record<string, any>) => string;
  urlToList: (url: string) => string[];
  toPath: (url: string, params: paramsMap) => string;
};
export default _default;
