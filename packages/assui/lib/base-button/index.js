"use strict";

var _excluded = ["color", "variant", "size", "disabled", "round", "block", "loading", "prefixIcon", "suffixIcon", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var btnNamePrefix = 'base-btn';
var loadingIcon = (0, jsx_runtime_1.jsx)("div", {
  className: btnNamePrefix + "-loading-icon",
  children: (0, jsx_runtime_1.jsx)("div", {
    className: btnNamePrefix + "-loading-icon-mask"
  })
});
var BaseButton = function BaseButton(_ref) {
  var _ref2;
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'default' : _ref$color,
    variant = _ref.variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    disabled = _ref.disabled,
    _ref$round = _ref.round,
    round = _ref$round === void 0 ? false : _ref$round,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? false : _ref$block,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    prefixIcon = _ref.prefixIcon,
    suffixIcon = _ref.suffixIcon,
    children = _ref.children,
    className = _ref.className,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  return (0, jsx_runtime_1.jsx)("button", _extends({
    type: "button",
    disabled: disabled || loading
  }, restProps, {
    className: (0, classnames_1["default"])(btnNamePrefix, btnNamePrefix + "-" + color, btnNamePrefix + "-" + size, variant && btnNamePrefix + "-variant-" + variant, (_ref2 = {}, _ref2[btnNamePrefix + "-round"] = round, _ref2[btnNamePrefix + "-block"] = block, _ref2[btnNamePrefix + "-disabled"] = disabled, _ref2[btnNamePrefix + "-loading"] = loading, _ref2), className),
    children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
      children: [prefixIcon && (0, jsx_runtime_1.jsx)("span", {
        className: btnNamePrefix + "-icon",
        children: loading ? loadingIcon : prefixIcon
      }), loading && !prefixIcon && !suffixIcon && loadingIcon, (0, jsx_runtime_1.jsx)("span", {
        className: btnNamePrefix + "-content",
        children: children
      }), loading && !prefixIcon && suffixIcon && (0, jsx_runtime_1.jsx)("span", {
        className: btnNamePrefix + "-icon",
        children: loadingIcon
      }), (!loading || prefixIcon) && suffixIcon && (0, jsx_runtime_1.jsx)("span", {
        className: btnNamePrefix + "-icon",
        children: suffixIcon
      })]
    })
  }));
};
exports["default"] = BaseButton;