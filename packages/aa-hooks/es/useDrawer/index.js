var _excluded = ["onBeforeOpen", "onBeforeClose", "renderChildren", "className", "rootClassName", "style", "rootStyle", "mask", "maskClosable", "destroyOnClose", "destroyOnHidden"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useRef, useState } from 'react';
import classNames from 'classnames';
export var useDrawer = function useDrawer(props) {
  var _mask$closable;
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  var _ref = props != null ? props : {},
    onBeforeOpen = _ref.onBeforeOpen,
    onBeforeClose = _ref.onBeforeClose,
    renderChildren = _ref.renderChildren,
    className = _ref.className,
    rootClassName = _ref.rootClassName,
    style = _ref.style,
    rootStyle = _ref.rootStyle,
    mask = _ref.mask,
    maskClosable = _ref.maskClosable,
    destroyOnClose = _ref.destroyOnClose,
    _ref$destroyOnHidden = _ref.destroyOnHidden,
    destroyOnHidden = _ref$destroyOnHidden === void 0 ? destroyOnClose : _ref$destroyOnHidden,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
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
  var drawerProps = _extends({
    open: open,
    onClose: closeDrawer,
    rootClassName: classNames(className, rootClassName),
    rootStyle: _extends({}, style, rootStyle),
    destroyOnHidden: destroyOnHidden,
    mask: mask === false ? false : maskClosable === undefined ? mask : _extends({}, mask === true ? {
      enabled: true
    } : mask, {
      closable: typeof mask === 'object' ? (_mask$closable = mask.closable) != null ? _mask$closable : maskClosable : maskClosable
    })
  }, restProps);
  if (renderChildren) {
    drawerProps.children = renderChildren(actionRef.current);
  }
  return [drawerProps, actionRef.current];
};
export var generateUseDrawer = function generateUseDrawer(defaultProps) {
  return function useDrawerFunc(newProps) {
    var props = _extends({}, defaultProps, newProps, {
      className: classNames(defaultProps.className, newProps == null ? void 0 : newProps.className),
      rootClassName: classNames(defaultProps.rootClassName, newProps == null ? void 0 : newProps.rootClassName)
    });
    return useDrawer(props);
  };
};