"use strict";

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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("rc-util/lib/omit"));
var gapSize_1 = require("./utils/gapSize");
var utils_1 = __importDefault(require("./utils"));
var Flex = react_1["default"].forwardRef(function (props, ref) {
  var _a;
  var className = props.className,
    style = props.style,
    flex = props.flex,
    gap = props.gap,
    children = props.children,
    _b = props.vertical,
    vertical = _b === void 0 ? false : _b,
    _c = props.component,
    Component = _c === void 0 ? 'div' : _c,
    othersProps = __rest(props, ["className", "style", "flex", "gap", "children", "vertical", "component"]);
  var prefixCls = 'as-flex';
  var flexClassNames = (0, utils_1["default"])(prefixCls, props);
  var mergedCls = (0, classnames_1["default"])(className, prefixCls, flexClassNames, (_a = {}, _a["".concat(prefixCls, "-gap-").concat(gap)] = (0, gapSize_1.isPresetSize)(gap), _a["".concat(prefixCls, "-vertical")] = vertical, _a));
  var mergedStyle = __assign({}, style);
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !(0, gapSize_1.isPresetSize)(gap)) {
    mergedStyle.gap = gap;
  }
  return react_1["default"].createElement(Component, __assign({
    ref: ref,
    className: mergedCls
  }, (0, omit_1["default"])(othersProps, ['justify', 'wrap', 'align']), {
    style: mergedStyle
  }), children);
});
exports["default"] = Flex;