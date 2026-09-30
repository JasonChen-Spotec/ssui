"use strict";

var _excluded = ["onBeforeOpen", "onBeforeClose", "renderChildren", "className", "rootClassName", "style", "rootStyle", "mask", "maskClosable", "destroyOnClose", "destroyOnHidden"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUseDrawer = exports.useDrawer = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var useDrawer = function useDrawer(props) {
  var _mask$closable;
  var _ref = (0, react_1.useState)(false),
    open = _ref[0],
    setOpen = _ref[1];
  var _ref2 = props != null ? props : {},
    onBeforeOpen = _ref2.onBeforeOpen,
    onBeforeClose = _ref2.onBeforeClose,
    renderChildren = _ref2.renderChildren,
    className = _ref2.className,
    rootClassName = _ref2.rootClassName,
    style = _ref2.style,
    rootStyle = _ref2.rootStyle,
    mask = _ref2.mask,
    maskClosable = _ref2.maskClosable,
    destroyOnClose = _ref2.destroyOnClose,
    _ref2$destroyOnHidden = _ref2.destroyOnHidden,
    destroyOnHidden = _ref2$destroyOnHidden === void 0 ? destroyOnClose : _ref2$destroyOnHidden,
    restProps = _objectWithoutPropertiesLoose(_ref2, _excluded);
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
  var actionRef = (0, react_1.useRef)({
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
    rootClassName: (0, classnames_1["default"])(className, rootClassName),
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
exports.useDrawer = useDrawer;
var generateUseDrawer = function generateUseDrawer(defaultProps) {
  return function useDrawerFunc(newProps) {
    var props = _extends({}, defaultProps, newProps, {
      className: (0, classnames_1["default"])(defaultProps.className, newProps == null ? void 0 : newProps.className),
      rootClassName: (0, classnames_1["default"])(defaultProps.rootClassName, newProps == null ? void 0 : newProps.rootClassName)
    });
    return (0, exports.useDrawer)(props);
  };
};
exports.generateUseDrawer = generateUseDrawer;