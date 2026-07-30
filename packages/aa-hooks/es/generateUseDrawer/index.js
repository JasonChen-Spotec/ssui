var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import useDrawer, { defaultProps } from '../useDrawer/index';
var generateUseDrawer = function generateUseDrawer(defaultParams) {
  // eslint-disable-next-line max-len
  var useDrawerFunc = function useDrawerFunc(newProps) {
    var _a;
    return useDrawer(__assign((_a = {}, _a[defaultProps] = defaultParams, _a), newProps));
  };
  return useDrawerFunc;
};
export default generateUseDrawer;