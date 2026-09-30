function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Pane, SplitPane as RcSplitPane } from 'react-split-pane';
var ResizerContext = /*#__PURE__*/createContext({});
// Keep the existing stylesheet and its divider orientation names. The upstream
// v3 direction describes the pane arrangement, which is the opposite convention.
var Resizer = function Resizer(_ref) {
  var disabled = _ref.disabled,
    onPointerDown = _ref.onPointerDown,
    onKeyDown = _ref.onKeyDown,
    className = _ref.className,
    style = _ref.style,
    currentSize = _ref.currentSize,
    minSize = _ref.minSize,
    maxSize = _ref.maxSize;
  var _useContext = useContext(ResizerContext),
    split = _useContext.split,
    onResizerClick = _useContext.onResizerClick,
    onResizerDoubleClick = _useContext.onResizerDoubleClick;
  return (
    // biome-ignore lint/a11y/useSemanticElements: This focusable splitter handles keyboard and pointer resizing, rather than a thematic break.
    _jsx("span", {
      role: "separator",
      "aria-orientation": split,
      "aria-valuenow": currentSize,
      "aria-valuemin": minSize,
      "aria-valuemax": maxSize,
      tabIndex: disabled ? -1 : 0,
      className: ['Resizer', split, disabled && 'disabled', className].filter(Boolean).join(' '),
      style: _extends({
        flex: 'none',
        position: 'relative',
        userSelect: 'none',
        touchAction: 'none'
      }, style),
      onPointerDown: disabled ? undefined : onPointerDown,
      onKeyDown: disabled ? undefined : onKeyDown,
      onClick: function onClick(event) {
        return onResizerClick == null ? void 0 : onResizerClick(event.nativeEvent);
      },
      onDoubleClick: function onDoubleClick(event) {
        return onResizerDoubleClick == null ? void 0 : onResizerDoubleClick(event.nativeEvent);
      }
    })
  );
};
var pixels = function pixels(value, total) {
  if (typeof value === 'number') {
    return value;
  }
  return value.endsWith('%') ? parseFloat(value) / 100 * total : parseFloat(value);
};
var SplitPane = function SplitPane(_ref2) {
  var _ref3;
  var _ref2$allowResize = _ref2.allowResize,
    allowResize = _ref2$allowResize === void 0 ? true : _ref2$allowResize,
    className = _ref2.className,
    _ref2$primary = _ref2.primary,
    primary = _ref2$primary === void 0 ? 'first' : _ref2$primary,
    _ref2$minSize = _ref2.minSize,
    minSize = _ref2$minSize === void 0 ? 50 : _ref2$minSize,
    maxSize = _ref2.maxSize,
    defaultSize = _ref2.defaultSize,
    size = _ref2.size,
    _ref2$split = _ref2.split,
    split = _ref2$split === void 0 ? 'vertical' : _ref2$split,
    onDragStarted = _ref2.onDragStarted,
    onDragFinished = _ref2.onDragFinished,
    onChange = _ref2.onChange,
    onResizerClick = _ref2.onResizerClick,
    onResizerDoubleClick = _ref2.onResizerDoubleClick,
    style = _ref2.style,
    resizerStyle = _ref2.resizerStyle,
    paneStyle = _ref2.paneStyle,
    pane1Style = _ref2.pane1Style,
    pane2Style = _ref2.pane2Style,
    resizerClassName = _ref2.resizerClassName,
    step = _ref2.step,
    children = _ref2.children;
  var _useState = useState((_ref3 = size != null ? size : defaultSize) != null ? _ref3 : minSize),
    currentSize = _useState[0],
    setCurrentSize = _useState[1];
  var previousSize = useRef(size);
  var hasResized = useRef(false);
  var lastDragSize = useRef(undefined);
  useEffect(function () {
    // v1 applies size when the prop changes, but still allows dragging while
    // that prop is unchanged. Keep the rendered and drag-origin sizes in sync.
    if (previousSize.current !== size) {
      previousSize.current = size;
      if (size !== undefined) {
        hasResized.current = true;
        setCurrentSize(size);
      }
    }
    if (size === undefined) {
      setCurrentSize(function (current) {
        if (!hasResized.current) {
          return defaultSize != null ? defaultSize : minSize;
        }
        if (typeof current !== 'number') {
          return current;
        }
        return Math.max(typeof minSize === 'number' ? minSize : 0, Math.min(typeof maxSize === 'number' && maxSize > 0 ? maxSize : Infinity, current));
      });
    }
  }, [size, defaultSize, minSize, maxSize]);
  var primaryIndex = primary === 'first' ? 0 : 1;
  var panes = React.Children.toArray(children);
  var vertical = split === 'vertical';
  // A non-positive legacy maxSize reserves space for the other pane,
  // measured against the full container size.
  var reserveSize = typeof maxSize === 'number' && maxSize <= 0;
  var otherMinSize = reserveSize ? -maxSize : 0;
  return _jsx("div", {
    className: ['SplitPane', className, split, !allowResize && 'disabled'].filter(Boolean).join(' '),
    style: _extends({
      display: 'flex',
      flex: 1,
      height: '100%',
      position: 'absolute',
      outline: 'none',
      overflow: 'hidden'
    }, style, vertical ? {
      flexDirection: 'row',
      left: 0,
      right: 0
    } : {
      flexDirection: 'column',
      bottom: 0,
      top: 0,
      minHeight: '100%',
      width: '100%'
    }),
    children: _jsx(ResizerContext.Provider, {
      value: {
        split: split,
        onResizerClick: onResizerClick,
        onResizerDoubleClick: onResizerDoubleClick
      },
      children: _jsx(RcSplitPane, {
        direction: vertical ? 'horizontal' : 'vertical',
        resizable: allowResize,
        divider: Resizer,
        // Legacy percentages refer to the entire container. The flexible
        // secondary pane absorbs the divider's actual CSS width.
        dividerSize: 0,
        dividerClassName: resizerClassName,
        dividerStyle: resizerStyle,
        step: step,
        onResizeStart: function onResizeStart(event) {
          lastDragSize.current = event.sizes[primaryIndex];
          onDragStarted == null || onDragStarted();
        },
        onResize: function onResize(sizes) {
          var total = sizes.reduce(function (sum, paneSize) {
            return sum + paneSize;
          }, 0);
          var maximum = maxSize === undefined ? Infinity : reserveSize ? total + Number(maxSize) : pixels(maxSize, total);
          // v3 distributes deltas between both panes before clamping. Apply
          // the legacy boundary even when the initial size is out of bounds.
          var nextSize = Math.max(pixels(minSize, total), Math.min(maximum, sizes[primaryIndex]));
          lastDragSize.current = nextSize;
          hasResized.current = true;
          setCurrentSize(nextSize);
          onChange == null || onChange(nextSize);
        },
        onResizeEnd: function onResizeEnd(sizes) {
          var _lastDragSize$current;
          return onDragFinished == null ? void 0 : onDragFinished((_lastDragSize$current = lastDragSize.current) != null ? _lastDragSize$current : sizes[primaryIndex]);
        },
        children: [0, 1].map(function (index) {
          var _ref4;
          var isPrimary = index === primaryIndex;
          return _jsx(Pane, {
            className: "Pane Pane" + (index + 1) + " " + split,
            // Keep the primary pane fixed when its container resizes, just
            // as v1 did, instead of v3's default proportional resizing.
            size: isPrimary ? currentSize : undefined,
            minSize: isPrimary ? minSize : otherMinSize,
            maxSize: isPrimary && !reserveSize ? maxSize : undefined,
            style: _extends({
              overflow: 'visible'
            }, isPrimary ? typeof currentSize === 'number' ? (_ref4 = {}, _ref4[vertical ? 'width' : 'height'] = currentSize, _ref4) : {} : {
              flex: 1,
              minWidth: 0,
              minHeight: 0
            }, paneStyle, index === 0 ? pane1Style : pane2Style),
            children: panes[index]
          }, index);
        })
      })
    })
  });
};
export default SplitPane;