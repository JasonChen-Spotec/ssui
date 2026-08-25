"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unFocus = exports.removeNullChildren = exports.getSizeUpdate = exports.getDefaultSize = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var isNumber_1 = tslib_1.__importDefault(require("lodash/isNumber"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
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
  var _document$getSelectio, _window$getSelection;
  (_document$getSelectio = document.getSelection()) == null || _document$getSelectio.empty();
  (_window$getSelection = window.getSelection()) == null || _window$getSelection.removeAllRanges();
};
exports.unFocus = unFocus;