var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import React from 'react';
import useGetState from "ahooks/es/useGetState";
import useMount from "ahooks/es/useMount";
import useUnmount from "ahooks/es/useUnmount";
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import View from './View';
import DraggableHandle from './DraggableHandle';
import { getSizeUpdate, removeNullChildren, getDefaultSize, unFocus } from './utils';
export { View };
var RcSplitView = function RcSplitView(props) {
  var _a;
  var _b = props.draggable,
    draggable = _b === void 0 ? true : _b,
    children = props.children,
    className = props.className,
    onResizerClick = props.onResizerClick,
    onResizerDoubleClick = props.onResizerDoubleClick,
    viewClassName = props.viewClassName,
    firstViewClassName = props.firstViewClassName,
    secondViewClassName = props.secondViewClassName,
    handleClassName = props.handleClassName,
    _c = props.split,
    split = _c === void 0 ? 'vertical' : _c,
    onDragStarted = props.onDragStarted,
    onDragFinished = props.onDragFinished,
    _d = props.primary,
    primary = _d === void 0 ? 'first' : _d,
    step = props.step,
    maxSize = props.maxSize,
    _e = props.minSize,
    minSize = _e === void 0 ? 50 : _e,
    onChange = props.onChange,
    size = props.size,
    defaultSize = props.defaultSize,
    handleContent = props.handleContent,
    handleContentClassName = props.handleContentClassName;
  var initialSize = isUndefined(size) ? getDefaultSize(defaultSize, minSize, maxSize) : size;
  var initialValue = {
    active: false,
    firstViewSize: primary === 'first' ? initialSize : undefined,
    secondViewSize: primary === 'second' ? initialSize : undefined,
    // these are props that are needed in static functions. ie: gDSFP
    instanceProps: {
      size: size
    },
    position: 0
  };
  var splitViewRef = React.useRef(null);
  var firstViewRef = React.useRef(null);
  var secondViewRef = React.useRef(null);
  var _f = __read(useGetState(initialValue), 3),
    states = _f[0],
    setStates = _f[1],
    getStates = _f[2];
  var onTouchStart = function onTouchStart(event) {
    var currentValue = getStates();
    if (draggable) {
      unFocus(document, window);
      var _a = event.touches[0],
        clientX = _a.clientX,
        clientY = _a.clientY;
      var position = split === 'vertical' ? clientX : clientY;
      onDragStarted === null || onDragStarted === void 0 ? void 0 : onDragStarted();
      setStates(__assign(__assign({}, currentValue), {
        active: true,
        position: position
      }));
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var eventWithTouches = __assign(__assign({}, event), {
      touches: [{
        clientX: event.clientX,
        clientY: event.clientY
      }]
    });
    onTouchStart(eventWithTouches);
  };
  var onMouseUp = function onMouseUp() {
    var currentValue = getStates();
    var active = currentValue.active,
      draggedSize = currentValue.draggedSize;
    if (draggable && active && draggedSize) {
      onDragFinished === null || onDragFinished === void 0 ? void 0 : onDragFinished(draggedSize);
      setStates(__assign(__assign({}, currentValue), {
        active: false
      }));
    }
  };
  var onTouchMove = function onTouchMove(event) {
    var _a;
    var _b;
    var currentValue = getStates();
    var active = currentValue.active,
      position = currentValue.position;
    if (draggable && active) {
      unFocus(document, window);
      var isFirstPrimary = primary === 'first';
      var firstRef = isFirstPrimary ? firstViewRef.current : secondViewRef.current;
      var secondRef = isFirstPrimary ? secondViewRef.current : firstViewRef.current;
      if (firstRef && secondRef) {
        var firstNode = firstRef;
        var secondNode = secondRef;
        if (firstNode.getBoundingClientRect) {
          var _c = firstNode.getBoundingClientRect(),
            width = _c.width,
            height = _c.height;
          var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
          var nodeSize = split === 'vertical' ? width : height;
          var positionDelta = position - current;
          if (step) {
            if (Math.abs(positionDelta) < step) {
              return;
            }
            positionDelta = Math.trunc(positionDelta / step) * step;
          }
          var sizeDelta = isFirstPrimary ? positionDelta : -positionDelta;
          var firstViewOrder = parseInt(window.getComputedStyle(firstNode).order, 10);
          var secondViewOrder = parseInt(window.getComputedStyle(secondNode).order, 10);
          if (firstViewOrder > secondViewOrder) {
            sizeDelta = -sizeDelta;
          }
          var newMaxSize = maxSize || 0;
          if (!isUndefined(maxSize) && maxSize <= 0) {
            if (split === 'vertical') {
              newMaxSize = ((_b = splitViewRef.current.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width) + maxSize;
            } else {
              newMaxSize = splitViewRef.current.getBoundingClientRect().height + maxSize;
            }
          }
          var newSize = +nodeSize - sizeDelta;
          var newPosition = position - positionDelta;
          var restValue = {};
          if (newSize < minSize) {
            newSize = minSize;
          } else if (!isUndefined(maxSize) && newSize > newMaxSize) {
            newSize = newMaxSize;
          } else {
            restValue = {
              position: newPosition
            };
          }
          onChange === null || onChange === void 0 ? void 0 : onChange(newSize);
          setStates(__assign(__assign(__assign({}, currentValue), (_a = {
            draggedSize: newSize
          }, _a[isFirstPrimary ? 'firstViewSize' : 'secondViewSize'] = newSize, _a)), restValue));
        }
      }
    }
  };
  var onMouseMove = function onMouseMove(event) {
    var eventWithTouches = __assign(__assign({}, event), {
      touches: [{
        clientX: event.clientX,
        clientY: event.clientY
      }]
    });
    onTouchMove(eventWithTouches);
  };
  useMount(function () {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    setStates(getSizeUpdate({
      size: size,
      defaultSize: defaultSize,
      maxSize: maxSize,
      minSize: minSize,
      primary: primary
    }, states));
  });
  useUnmount(function () {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onTouchMove);
  });
  var _g = __read(removeNullChildren(children), 2),
    firstViewNode = _g[0],
    secondViewNode = _g[1];
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('split-view', "split-view-".concat(split), className),
    ref: splitViewRef
  }, /*#__PURE__*/React.createElement(View, {
    className: classNames(viewClassName, firstViewClassName),
    key: "first-view",
    ref: firstViewRef,
    size: states.firstViewSize,
    split: split
  }, firstViewNode), /*#__PURE__*/React.createElement(DraggableHandle, {
    className: classNames('split-view-draggable-handle', (_a = {}, _a["split-view-draggable-handle-".concat(split, "-disabled")] = !draggable, _a), "split-view-draggable-handle-".concat(split), handleClassName),
    onClick: onResizerClick,
    onDoubleClick: onResizerDoubleClick,
    onMouseDown: onMouseDown,
    onTouchStart: onTouchStart,
    onTouchEnd: onMouseUp,
    key: "draggableHandle"
  }, draggable && /*#__PURE__*/React.createElement("div", {
    className: classNames("split-view-draggable-handle-".concat(split, "-content"), handleContentClassName)
  }, handleContent)), /*#__PURE__*/React.createElement(View, {
    className: classNames(viewClassName, secondViewClassName),
    key: "second-view",
    ref: secondViewRef,
    size: states.secondViewSize,
    split: split
  }, secondViewNode));
};
export default RcSplitView;