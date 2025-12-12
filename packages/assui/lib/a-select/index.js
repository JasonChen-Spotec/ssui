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
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
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
var select_1 = __importDefault(require("antd/lib/select"));
var classnames_1 = __importDefault(require("classnames"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var ASelect = function ASelect(props) {
  var valueRender = props.valueRender,
    className = props.className,
    restProps = __rest(props, ["valueRender", "className"]);
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    onChange = _a[1];
  if (!valueRender) {
    return react_1["default"].createElement(select_1["default"], __assign({
      className: className
    }, restProps, {
      value: value,
      onChange: onChange
    }));
  }
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('a-select-wrap', className)
  }, react_1["default"].createElement("div", {
    className: "a-select-value-wrap"
  }, valueRender(value)), react_1["default"].createElement(select_1["default"], __assign({}, restProps, {
    value: value,
    onChange: onChange
  })));
};
exports["default"] = ASelect;
ASelect.Option = select_1["default"].Option;