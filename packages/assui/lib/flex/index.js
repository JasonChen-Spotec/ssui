"use strict";

var _excluded = ["className", "style", "flex", "gap", "children", "vertical", "component"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("rc-util/lib/omit"));
var gapSize_1 = require("./utils/gapSize");
var utils_1 = tslib_1.__importDefault(require("./utils"));
var Flex = react_1["default"].forwardRef(function (props, ref) {
  var _ref;
  var className = props.className,
    style = props.style,
    flex = props.flex,
    gap = props.gap,
    children = props.children,
    _props$vertical = props.vertical,
    vertical = _props$vertical === void 0 ? false : _props$vertical,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    othersProps = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = 'as-flex';
  var flexClassNames = (0, utils_1["default"])(prefixCls, props);
  var mergedCls = (0, classnames_1["default"])(className, prefixCls, flexClassNames, (_ref = {}, _ref[prefixCls + "-gap-" + gap] = (0, gapSize_1.isPresetSize)(gap), _ref[prefixCls + "-vertical"] = vertical, _ref));
  var mergedStyle = _extends({}, style);
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !(0, gapSize_1.isPresetSize)(gap)) {
    mergedStyle.gap = gap;
  }
  return (0, jsx_runtime_1.jsx)(Component, _extends({
    ref: ref,
    className: mergedCls
  }, (0, omit_1["default"])(othersProps, ['justify', 'wrap', 'align']), {
    style: mergedStyle,
    children: children
  }));
});
exports["default"] = Flex;