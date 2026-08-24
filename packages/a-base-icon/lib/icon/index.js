"use strict";

var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("./utils");
var Icon = function Icon(props) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  (0, utils_1.useInsertStyles)();
  var classString = (0, classnames_1["default"])('spotecicon', className);
  var svgClassString = (0, classnames_1["default"])({
    'spotecicon-spin': !!spin
  });
  var svgStyle = rotate ? {
    msTransform: "rotate(" + rotate + "deg)",
    transform: "rotate(" + rotate + "deg)"
  } : undefined;
  var innerSvgProps = _extends({}, utils_1.svgBaseProps, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return (0, jsx_runtime_1.jsx)(Component, _extends({}, innerSvgProps, {
        children: children
      }));
    }
    if (children) {
      return (0, jsx_runtime_1.jsx)("svg", _extends({}, innerSvgProps, {
        viewBox: viewBox,
        children: children
      }));
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return (0, jsx_runtime_1.jsx)("span", _extends({
    role: "img"
  }, restProps, {
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString,
    children: renderInnerNode()
  }));
};
Icon.displayName = 'SpotecIcon';
exports["default"] = Icon;