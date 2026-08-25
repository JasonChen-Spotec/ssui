function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useGetState from "ahooks/es/useGetState";
import useMount from "ahooks/es/useMount";
import useUnmount from "ahooks/es/useUnmount";
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import DraggableHandle from './DraggableHandle';
import { getDefaultSize, getSizeUpdate, removeNullChildren, unFocus } from './utils';
import View from './View';
export { View };
var RcSplitView = function RcSplitView(props) {
  var _classNames;
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
  var _useGetState = useGetState(initialValue),
    states = _useGetState[0],
    setStates = _useGetState[1],
    getStates = _useGetState[2];
  var onTouchStart = function onTouchStart(event) {
    var currentValue = getStates();
    if (draggable) {
      unFocus(document, window);
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
      unFocus(document, window);
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
          if (!isUndefined(maxSize) && maxSize <= 0) {
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
          } else if (!isUndefined(maxSize) && newSize > newMaxSize) {
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
  var _removeNullChildren = removeNullChildren(children),
    firstViewNode = _removeNullChildren[0],
    secondViewNode = _removeNullChildren[1];
  return _jsxs("div", {
    className: classNames('split-view', "split-view-" + split, className),
    ref: splitViewRef,
    children: [_jsx(View, {
      className: classNames(viewClassName, firstViewClassName),
      ref: firstViewRef,
      size: states.firstViewSize,
      split: split,
      children: firstViewNode
    }, "first-view"), _jsx(DraggableHandle, {
      className: classNames('split-view-draggable-handle', (_classNames = {}, _classNames["split-view-draggable-handle-" + split + "-disabled"] = !draggable, _classNames), "split-view-draggable-handle-" + split, handleClassName),
      onClick: onResizerClick,
      onDoubleClick: onResizerDoubleClick,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      onTouchEnd: onMouseUp,
      children: draggable && _jsx("div", {
        className: classNames("split-view-draggable-handle-" + split + "-content", handleContentClassName),
        children: handleContent
      })
    }, "draggableHandle"), _jsx(View, {
      className: classNames(viewClassName, secondViewClassName),
      ref: secondViewRef,
      size: states.secondViewSize,
      split: split,
      children: secondViewNode
    }, "second-view")]
  });
};
export default RcSplitView;