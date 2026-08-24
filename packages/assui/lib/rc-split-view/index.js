"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useGetState_1 = tslib_1.__importDefault(require("ahooks/lib/useGetState"));
var useMount_1 = tslib_1.__importDefault(require("ahooks/lib/useMount"));
var useUnmount_1 = tslib_1.__importDefault(require("ahooks/lib/useUnmount"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var View_1 = tslib_1.__importDefault(require("./View"));
exports.View = View_1["default"];
var DraggableHandle_1 = tslib_1.__importDefault(require("./DraggableHandle"));
var utils_1 = require("./utils");
var RcSplitView = function RcSplitView(props) {
  var _ref3;
  var _props$draggable = props.draggable,
    draggable = _props$draggable === void 0 ? true : _props$draggable,
    children = props.children,
    className = props.className,
    onResizerClick = props.onResizerClick,
    onResizerDoubleClick = props.onResizerDoubleClick,
    viewClassName = props.viewClassName,
    firstViewClassName = props.firstViewClassName,
    secondViewClassName = props.secondViewClassName,
    handleClassName = props.handleClassName,
    _props$split = props.split,
    split = _props$split === void 0 ? 'vertical' : _props$split,
    onDragStarted = props.onDragStarted,
    onDragFinished = props.onDragFinished,
    _props$primary = props.primary,
    primary = _props$primary === void 0 ? 'first' : _props$primary,
    step = props.step,
    maxSize = props.maxSize,
    _props$minSize = props.minSize,
    minSize = _props$minSize === void 0 ? 50 : _props$minSize,
    onChange = props.onChange,
    size = props.size,
    defaultSize = props.defaultSize,
    handleContent = props.handleContent,
    handleContentClassName = props.handleContentClassName;
  var initialSize = (0, isUndefined_1["default"])(size) ? (0, utils_1.getDefaultSize)(defaultSize, minSize, maxSize) : size;
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
  var splitViewRef = react_1["default"].useRef(null);
  var firstViewRef = react_1["default"].useRef(null);
  var secondViewRef = react_1["default"].useRef(null);
  var _ref = (0, useGetState_1["default"])(initialValue),
    states = _ref[0],
    setStates = _ref[1],
    getStates = _ref[2];
  var onTouchStart = function onTouchStart(event) {
    var currentValue = getStates();
    if (draggable) {
      (0, utils_1.unFocus)(document, window);
      var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
      var position = split === 'vertical' ? clientX : clientY;
      onDragStarted == null || onDragStarted();
      setStates(_extends({}, currentValue, {
        active: true,
        position: position
      }));
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var eventWithTouches = _extends({}, event, {
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
      onDragFinished == null || onDragFinished(draggedSize);
      setStates(_extends({}, currentValue, {
        active: false
      }));
    }
  };
  var onTouchMove = function onTouchMove(event) {
    var currentValue = getStates();
    var active = currentValue.active,
      position = currentValue.position;
    if (draggable && active) {
      (0, utils_1.unFocus)(document, window);
      var isFirstPrimary = primary === 'first';
      var firstRef = isFirstPrimary ? firstViewRef.current : secondViewRef.current;
      var secondRef = isFirstPrimary ? secondViewRef.current : firstViewRef.current;
      if (firstRef && secondRef) {
        var firstNode = firstRef;
        var secondNode = secondRef;
        if (firstNode.getBoundingClientRect) {
          var _extends2;
          var _firstNode$getBoundin = firstNode.getBoundingClientRect(),
            width = _firstNode$getBoundin.width,
            height = _firstNode$getBoundin.height;
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
          if (!(0, isUndefined_1["default"])(maxSize) && maxSize <= 0) {
            if (split === 'vertical') {
              var _splitViewRef$current;
              newMaxSize = ((_splitViewRef$current = splitViewRef.current.getBoundingClientRect()) == null ? void 0 : _splitViewRef$current.width) + maxSize;
            } else {
              newMaxSize = splitViewRef.current.getBoundingClientRect().height + maxSize;
            }
          }
          var newSize = +nodeSize - sizeDelta;
          var newPosition = position - positionDelta;
          var restValue = {};
          if (newSize < minSize) {
            newSize = minSize;
          } else if (!(0, isUndefined_1["default"])(maxSize) && newSize > newMaxSize) {
            newSize = newMaxSize;
          } else {
            restValue = {
              position: newPosition
            };
          }
          onChange == null || onChange(newSize);
          setStates(_extends({}, currentValue, (_extends2 = {
            draggedSize: newSize
          }, _extends2[isFirstPrimary ? 'firstViewSize' : 'secondViewSize'] = newSize, _extends2), restValue));
        }
      }
    }
  };
  var onMouseMove = function onMouseMove(event) {
    var eventWithTouches = _extends({}, event, {
      touches: [{
        clientX: event.clientX,
        clientY: event.clientY
      }]
    });
    onTouchMove(eventWithTouches);
  };
  (0, useMount_1["default"])(function () {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    setStates((0, utils_1.getSizeUpdate)({
      size: size,
      defaultSize: defaultSize,
      maxSize: maxSize,
      minSize: minSize,
      primary: primary
    }, states));
  });
  (0, useUnmount_1["default"])(function () {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onTouchMove);
  });
  var _ref2 = (0, utils_1.removeNullChildren)(children),
    firstViewNode = _ref2[0],
    secondViewNode = _ref2[1];
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])('split-view', "split-view-" + split, className),
    ref: splitViewRef,
    children: [(0, jsx_runtime_1.jsx)(View_1["default"], {
      className: (0, classnames_1["default"])(viewClassName, firstViewClassName),
      ref: firstViewRef,
      size: states.firstViewSize,
      split: split,
      children: firstViewNode
    }, "first-view"), (0, jsx_runtime_1.jsx)(DraggableHandle_1["default"], {
      className: (0, classnames_1["default"])('split-view-draggable-handle', (_ref3 = {}, _ref3["split-view-draggable-handle-" + split + "-disabled"] = !draggable, _ref3), "split-view-draggable-handle-" + split, handleClassName),
      onClick: onResizerClick,
      onDoubleClick: onResizerDoubleClick,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      onTouchEnd: onMouseUp,
      children: draggable && (0, jsx_runtime_1.jsx)("div", {
        className: (0, classnames_1["default"])("split-view-draggable-handle-" + split + "-content", handleContentClassName),
        children: handleContent
      })
    }, "draggableHandle"), (0, jsx_runtime_1.jsx)(View_1["default"], {
      className: (0, classnames_1["default"])(viewClassName, secondViewClassName),
      ref: secondViewRef,
      size: states.secondViewSize,
      split: split,
      children: secondViewNode
    }, "second-view")]
  });
};
exports["default"] = RcSplitView;