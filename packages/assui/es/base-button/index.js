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
import React from 'react';
import classNames from 'classnames';
var btnNamePrefix = 'base-btn';
var loadingIcon = /*#__PURE__*/React.createElement("div", {
  className: "".concat(btnNamePrefix, "-loading-icon")
}, /*#__PURE__*/React.createElement("div", {
  className: "".concat(btnNamePrefix, "-loading-icon-mask")
}));
var BaseButton = function BaseButton(_a) {
  var _b;
  var _c = _a.color,
    color = _c === void 0 ? 'default' : _c,
    variant = _a.variant,
    _d = _a.size,
    size = _d === void 0 ? 'medium' : _d,
    disabled = _a.disabled,
    _e = _a.round,
    round = _e === void 0 ? false : _e,
    _f = _a.block,
    block = _f === void 0 ? false : _f,
    _g = _a.loading,
    loading = _g === void 0 ? false : _g,
    prefixIcon = _a.prefixIcon,
    suffixIcon = _a.suffixIcon,
    children = _a.children,
    className = _a.className,
    restProps = __rest(_a, ["color", "variant", "size", "disabled", "round", "block", "loading", "prefixIcon", "suffixIcon", "children", "className"]);
  return /*#__PURE__*/React.createElement("button", __assign({
    type: "button",
    disabled: disabled || loading
  }, restProps, {
    className: classNames(btnNamePrefix, "".concat(btnNamePrefix, "-").concat(color), "".concat(btnNamePrefix, "-").concat(size), variant && "".concat(btnNamePrefix, "-variant-").concat(variant), (_b = {}, _b["".concat(btnNamePrefix, "-round")] = round, _b["".concat(btnNamePrefix, "-block")] = block, _b["".concat(btnNamePrefix, "-disabled")] = disabled, _b["".concat(btnNamePrefix, "-loading")] = loading, _b), className)
  }), /*#__PURE__*/React.createElement(React.Fragment, null, prefixIcon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(btnNamePrefix, "-icon")
  }, loading ? loadingIcon : prefixIcon), loading && !prefixIcon && !suffixIcon && loadingIcon, /*#__PURE__*/React.createElement("span", {
    className: "".concat(btnNamePrefix, "-content")
  }, children), loading && !prefixIcon && suffixIcon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(btnNamePrefix, "-icon")
  }, loadingIcon), (!loading || prefixIcon) && suffixIcon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(btnNamePrefix, "-icon")
  }, suffixIcon)));
};
export default BaseButton;