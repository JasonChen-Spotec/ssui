var _excluded = ["color", "variant", "size", "disabled", "round", "block", "loading", "prefixIcon", "suffixIcon", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
var btnNamePrefix = 'base-btn';
var loadingIcon = _jsx("div", {
  className: btnNamePrefix + "-loading-icon",
  children: _jsx("div", {
    className: btnNamePrefix + "-loading-icon-mask"
  })
});
var BaseButton = function BaseButton(_ref) {
  var _classNames;
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
  return _jsx("button", _extends({
    type: "button",
    disabled: disabled || loading
  }, restProps, {
    className: classNames(btnNamePrefix, btnNamePrefix + "-" + color, btnNamePrefix + "-" + size, variant && btnNamePrefix + "-variant-" + variant, (_classNames = {}, _classNames[btnNamePrefix + "-round"] = round, _classNames[btnNamePrefix + "-block"] = block, _classNames[btnNamePrefix + "-disabled"] = disabled, _classNames[btnNamePrefix + "-loading"] = loading, _classNames), className),
    children: _jsxs(_Fragment, {
      children: [prefixIcon && _jsx("span", {
        className: btnNamePrefix + "-icon",
        children: loading ? loadingIcon : prefixIcon
      }), loading && !prefixIcon && !suffixIcon && loadingIcon, _jsx("span", {
        className: btnNamePrefix + "-content",
        children: children
      }), loading && !prefixIcon && suffixIcon && _jsx("span", {
        className: btnNamePrefix + "-icon",
        children: loadingIcon
      }), (!loading || prefixIcon) && suffixIcon && _jsx("span", {
        className: btnNamePrefix + "-icon",
        children: suffixIcon
      })]
    })
  }));
};
export default BaseButton;