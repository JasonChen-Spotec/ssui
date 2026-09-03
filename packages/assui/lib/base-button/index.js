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
var BaseButton = function BaseButton(_ref) {
  var _ref2, _ref3, _ref4;
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
  var showDefaultLoading = loading && !prefixIcon && !suffixIcon;
  var loadingIcon = (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])(btnNamePrefix + "-loading-icon", (_ref2 = {}, _ref2[btnNamePrefix + "-loading-icon-default"] = showDefaultLoading, _ref2)),
    children: (0, jsx_runtime_1.jsx)("div", {
      className: btnNamePrefix + "-loading-icon-mask"
    })
  });
  return (0, jsx_runtime_1.jsxs)("button", _extends({
    type: "button",
    disabled: disabled || loading
  }, restProps, {
    className: (0, classnames_1["default"])(btnNamePrefix, btnNamePrefix + "-" + color, btnNamePrefix + "-" + size, variant && btnNamePrefix + "-variant-" + variant, (_ref3 = {}, _ref3[btnNamePrefix + "-round"] = round, _ref3[btnNamePrefix + "-block"] = block, _ref3[btnNamePrefix + "-disabled"] = disabled, _ref3[btnNamePrefix + "-loading"] = loading, _ref3[btnNamePrefix + "-default-loadingBox"] = showDefaultLoading, _ref3), className),
    children: [prefixIcon && (0, jsx_runtime_1.jsx)("span", {
      className: btnNamePrefix + "-icon",
      children: loading ? loadingIcon : prefixIcon
    }), showDefaultLoading && loadingIcon, (0, jsx_runtime_1.jsx)("span", {
      className: (0, classnames_1["default"])(btnNamePrefix + "-content", (_ref4 = {}, _ref4[btnNamePrefix + "-content-hidden"] = showDefaultLoading, _ref4)),
      children: children
    }), loading && !prefixIcon && suffixIcon && (0, jsx_runtime_1.jsx)("span", {
      className: btnNamePrefix + "-icon",
      children: loadingIcon
    }), (!loading || prefixIcon) && suffixIcon && (0, jsx_runtime_1.jsx)("span", {
      className: btnNamePrefix + "-icon",
      children: suffixIcon
    })]
  }));
};
exports["default"] = BaseButton;