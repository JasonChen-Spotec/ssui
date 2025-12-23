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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
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
import React, { useRef, useImperativeHandle } from 'react';
import Drawer from "antd/es/drawer";
import isFunction from 'lodash/isFunction';
import classNames from 'classnames';
import CloseOutlined from "a-icons/es/CloseOutlined";
import { useControllableValue } from 'ahooks';
var ButtonDrawer = function ButtonDrawer(props, ref) {
  var _a = __read(useControllableValue(props, {
      valuePropName: 'open'
    }), 2),
    drawerVisible = _a[0],
    setDrawerVisible = _a[1];
  var children = props.children,
    onOpen = props.onOpen,
    onClose = props.onClose,
    trigger = props.trigger,
    title = props.title,
    className = props.className,
    restProps = __rest(props, ["children", "onOpen", "onClose", "trigger", "title", "className"]);
  var isControl = ('open' in props);
  var closeDrawer = function closeDrawer() {
    if (!isControl) {
      setDrawerVisible(false);
    }
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var openDrawer = function openDrawer() {
    if (!isControl) {
      setDrawerVisible(true);
    }
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  };
  var actionRef = useRef({
    open: openDrawer,
    close: closeDrawer
  });
  useImperativeHandle(ref, function () {
    return actionRef.current;
  });
  var triggerNode;
  if (isFunction(trigger)) {
    triggerNode = trigger(openDrawer);
  } else {
    triggerNode = trigger && /*#__PURE__*/React.cloneElement(trigger, {
      onClick: function onClick(e) {
        var _a, _b;
        (_b = (_a = trigger.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        openDrawer();
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, triggerNode, /*#__PURE__*/React.createElement(Drawer, __assign({
    maskClosable: false,
    className: classNames('button-drawer', className),
    title: title,
    onClose: closeDrawer,
    open: drawerVisible,
    closeIcon: /*#__PURE__*/React.createElement(CloseOutlined, null)
  }, restProps), isFunction(children) ? children(actionRef.current) : /*#__PURE__*/React.cloneElement(children, {
    drawerAction: actionRef.current
  })));
};
var ForwardRefButtonDrawer = /*#__PURE__*/React.forwardRef(ButtonDrawer);
export default ForwardRefButtonDrawer;