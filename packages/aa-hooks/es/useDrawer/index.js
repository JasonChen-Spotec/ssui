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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
import classNames from 'classnames';
import { useRef, useState } from 'react';
export var useDrawer = function useDrawer(props) {
  var _a = __read(useState(false), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = props !== null && props !== void 0 ? props : {},
    onBeforeOpen = _b.onBeforeOpen,
    onBeforeClose = _b.onBeforeClose,
    renderChildren = _b.renderChildren,
    restProps = __rest(_b, ["onBeforeOpen", "onBeforeClose", "renderChildren"]);
  var closeDrawer = function closeDrawer() {
    if (onBeforeClose) {
      onBeforeClose();
    }
    setOpen(false);
  };
  var openDrawer = function openDrawer() {
    if (onBeforeOpen) {
      onBeforeOpen();
    }
    setOpen(true);
  };
  var actionRef = useRef({
    close: function close() {
      closeDrawer();
    },
    open: function open() {
      openDrawer();
    }
  });
  var drawerProps = __assign({
    open: open,
    onClose: closeDrawer
  }, restProps);
  if (renderChildren) {
    drawerProps.children = renderChildren(actionRef.current);
  }
  return [drawerProps, actionRef.current];
};

export var generateUseDrawer = function generateUseDrawer(defaultProps) {
  return function useDrawerFunc(newProps) {
    var props = __assign(__assign(__assign({}, defaultProps), newProps), {
      className: classNames(defaultProps.className, newProps === null || newProps === void 0 ? void 0 : newProps.className)
    });
    return useDrawer(props);
  };
};