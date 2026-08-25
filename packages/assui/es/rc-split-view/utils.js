import React from 'react';
import isNumber from 'lodash/isNumber';
import isUndefined from 'lodash/isUndefined';
/** 获取默认尺寸 */
export var getDefaultSize = function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (isNumber(draggedSize)) {
    var min = isNumber(minSize) ? minSize : 0;
    var max = isNumber(maxSize) && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }
  if (!isUndefined(defaultSize)) {
    return defaultSize;
  }
  return minSize;
};
/** 获取更新尺寸 */
export var getSizeUpdate = function getSizeUpdate(props, state) {
  var newState = {};
  var instanceProps = state.instanceProps;
  var hasSize = !isUndefined(props.size);
  if (instanceProps.size === props.size && hasSize) {
    return {};
  }
  var newSize = hasSize ? props.size : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);
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
/** 排除空的子元素 */
export var removeNullChildren = function removeNullChildren(children) {
  return React.Children.toArray(children).filter(function (c) {
    return c;
  });
};
/** 失去焦点 */
export var unFocus = function unFocus(document, window) {
  var _document$getSelectio, _window$getSelection;
  (_document$getSelectio = document.getSelection()) == null || _document$getSelectio.empty();
  (_window$getSelection = window.getSelection()) == null || _window$getSelection.removeAllRanges();
};