var _excluded = ["children", "onOpen", "onClose", "trigger", "title", "className", "rootClassName", "style", "rootStyle", "mask", "maskClosable", "destroyOnClose", "destroyOnHidden"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useImperativeHandle, useRef } from 'react';
import CloseOutlined from "a-icons/es/CloseOutlined";
import useControllableValue from "ahooks/es/useControllableValue";
import { Drawer } from 'antd';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
var ButtonDrawer = function ButtonDrawer(props, ref) {
  var _mask$closable;
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'open',
      defaultValue: false
    }),
    drawerVisible = _useControllableValue[0],
    setDrawerVisible = _useControllableValue[1];
  var children = props.children,
    onOpen = props.onOpen,
    onClose = props.onClose,
    trigger = props.trigger,
    title = props.title,
    className = props.className,
    rootClassName = props.rootClassName,
    style = props.style,
    rootStyle = props.rootStyle,
    mask = props.mask,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? false : _props$maskClosable,
    destroyOnClose = props.destroyOnClose,
    _props$destroyOnHidde = props.destroyOnHidden,
    destroyOnHidden = _props$destroyOnHidde === void 0 ? destroyOnClose : _props$destroyOnHidde,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var mergedMask = mask === false ? false : _extends({}, mask === true ? {
    enabled: true
  } : mask, {
    closable: typeof mask === 'object' ? (_mask$closable = mask.closable) != null ? _mask$closable : maskClosable : maskClosable
  });
  var closeDrawer = function closeDrawer() {
    setDrawerVisible(false);
    onClose == null || onClose();
  };
  var openDrawer = function openDrawer() {
    setDrawerVisible(true);
    onOpen == null || onOpen();
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
      onClick: openDrawer
    });
  }
  return _jsxs(_Fragment, {
    children: [triggerNode, _jsx(Drawer, _extends({
      mask: mergedMask,
      destroyOnHidden: destroyOnHidden,
      rootClassName: classNames('button-drawer', className, rootClassName),
      rootStyle: _extends({}, style, rootStyle),
      title: title,
      onClose: closeDrawer,
      open: drawerVisible,
      closeIcon: _jsx(CloseOutlined, {})
    }, restProps, {
      children: isFunction(children) ? children(actionRef.current) : /*#__PURE__*/React.cloneElement(children, {
        drawerAction: actionRef.current
      })
    }))]
  });
};
var ForwardRefButtonDrawer = /*#__PURE__*/React.forwardRef(ButtonDrawer);
export default ForwardRefButtonDrawer;