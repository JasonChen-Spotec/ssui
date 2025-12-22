"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unFocus = exports.removeNullChildren = exports.getSizeUpdate = exports.getDefaultSize = void 0;
var react_1 = __importDefault(require("react"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var isNumber_1 = __importDefault(require("lodash/isNumber"));
/** 获取默认尺寸 */
var getDefaultSize = function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if ((0, isNumber_1["default"])(draggedSize)) {
    var min = (0, isNumber_1["default"])(minSize) ? minSize : 0;
    var max = (0, isNumber_1["default"])(maxSize) && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }
  if (!(0, isUndefined_1["default"])(defaultSize)) {
    return defaultSize;
  }
  return minSize;
};
exports.getDefaultSize = getDefaultSize;
/** 获取更新尺寸 */
var getSizeUpdate = function getSizeUpdate(props, state) {
  var newState = {};
  var instanceProps = state.instanceProps;
  var hasSize = !(0, isUndefined_1["default"])(props.size);
  if (instanceProps.size === props.size && hasSize) {
    return {};
  }
  var newSize = hasSize ? props.size : (0, exports.getDefaultSize)(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);
  if (hasSize) {
    newState.draggedSize = newSize;
  }
  var isFirstViewPrimary = props.primary === 'first';
  newState[isFirstViewPrimary ? 'firstViewSize' : 'secondViewSize'] = newSize;
  newState[isFirstViewPrimary ? 'secondViewSize' : 'firstViewSize'] = undefined;
  newState.instanceProps = {
    size: props.size
  };
  return newState;
};
exports.getSizeUpdate = getSizeUpdate;
/** 排除空的子元素 */
var removeNullChildren = function removeNullChildren(children) {
  return react_1["default"].Children.toArray(children).filter(function (c) {
    return c;
  });
};
exports.removeNullChildren = removeNullChildren;
/** 失去焦点 */
var unFocus = function unFocus(document, window) {
  var _a, _b;
  (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.empty();
  (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
};
exports.unFocus = unFocus;