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
import { omit } from 'lodash';
import { useCallback, useMemo, useRef, useState } from 'react';
export var defaultProps = Symbol('defaultProps');
var useDrawer = function useDrawer(props) {
  var _a = __read(useState(false), 2),
    open = _a[0],
    setOpen = _a[1];
  var _b = props !== null && props !== void 0 ? props : {},
    _c = defaultProps,
    defaultParams = _b[_c],
    restState = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
  var restProps = useRef(restState);
  var closeDrawer = useCallback(function () {
    setOpen(false);
  }, []);
  var openDrawer = useCallback(function (params) {
    if (params) {
      restProps.current = __assign(__assign({}, restState), params);
    } else {
      restProps.current = restState;
    }
    setOpen(true);
  }, [restState]);
  var actionRef = useRef({
    close: function close() {
      closeDrawer();
    },
    open: function open(params) {
      openDrawer(params);
    }
  });
  var drawerProps = useMemo(function () {
    var _a, _b, _c;
    var data = __assign(__assign({
      open: open,
      onClose: closeDrawer
    }, omit(defaultParams, 'renderChildren')), omit(restProps.current, 'renderChildren'));
    if (defaultParams && 'renderChildren' in defaultParams) {
      data.children = (_a = defaultParams.renderChildren) === null || _a === void 0 ? void 0 : _a.call(defaultParams, actionRef.current);
    }
    if ('renderChildren' in restProps.current) {
      data.children = (_c = (_b = restProps.current).renderChildren) === null || _c === void 0 ? void 0 : _c.call(_b, actionRef.current);
    }
    return data;
  }, [closeDrawer, defaultParams, open, restProps]);
  return [drawerProps, actionRef.current];
};
export default useDrawer;