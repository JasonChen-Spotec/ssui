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
import useModal, { defaultProps } from '../useModal/index';
var generateUseModal = function generateUseModal(defaultParams) {
  // eslint-disable-next-line max-len
  var useModalFunc = function useModalFunc(newProps) {
    var _a;
    return useModal(__assign((_a = {}, _a[defaultProps] = defaultParams, _a), newProps));
  };
  return useModalFunc;
};
export default generateUseModal;