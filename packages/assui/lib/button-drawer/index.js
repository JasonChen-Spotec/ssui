"use strict";

var _excluded = ["children", "onOpen", "onClose", "trigger", "title", "className", "rootClassName", "style", "rootStyle", "mask", "maskClosable", "destroyOnClose", "destroyOnHidden"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importStar(require("react"));
var CloseOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/CloseOutlined"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var antd_1 = require("antd");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var ButtonDrawer = function ButtonDrawer(props, ref) {
  var _mask$closable;
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      defaultValue: false
    }),
    drawerVisible = _ref[0],
    setDrawerVisible = _ref[1];
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
  var actionRef = (0, react_1.useRef)({
    open: openDrawer,
    close: closeDrawer
  });
  (0, react_1.useImperativeHandle)(ref, function () {
    return actionRef.current;
  });
  var triggerNode;
  if ((0, isFunction_1["default"])(trigger)) {
    triggerNode = trigger(openDrawer);
  } else {
    triggerNode = trigger && react_1["default"].cloneElement(trigger, {
      onClick: openDrawer
    });
  }
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [triggerNode, (0, jsx_runtime_1.jsx)(antd_1.Drawer, _extends({
      mask: mergedMask,
      destroyOnHidden: destroyOnHidden,
      rootClassName: (0, classnames_1["default"])('button-drawer', className, rootClassName),
      rootStyle: _extends({}, style, rootStyle),
      title: title,
      onClose: closeDrawer,
      open: drawerVisible,
      closeIcon: (0, jsx_runtime_1.jsx)(CloseOutlined_1["default"], {})
    }, restProps, {
      children: (0, isFunction_1["default"])(children) ? children(actionRef.current) : react_1["default"].cloneElement(children, {
        drawerAction: actionRef.current
      })
    }))]
  });
};
var ForwardRefButtonDrawer = react_1["default"].forwardRef(ButtonDrawer);
exports["default"] = ForwardRefButtonDrawer;