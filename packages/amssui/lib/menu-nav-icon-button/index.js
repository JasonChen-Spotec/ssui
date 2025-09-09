"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var MenuNavIconButton = function MenuNavIconButton(props) {
  var _onClick = props.onClick,
    className = props.className;
  var _a = __read((0, useControllableValue_1["default"])(props, {
      valuePropName: 'status'
    }), 2),
    status = _a[0],
    setStatus = _a[1];
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('menu-nav-icon', {
      open: status
    }, className),
    onClick: function onClick() {
      var nextStatus = !status;
      setStatus(nextStatus);
      _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    }
  }, react_1["default"].createElement("div", {
    className: "menu-nav-icon-wrap"
  }, react_1["default"].createElement("span", {
    className: "menu-nav-icon-bar"
  }), react_1["default"].createElement("span", {
    className: "menu-nav-icon-bar"
  }), react_1["default"].createElement("span", {
    className: "menu-nav-icon-bar"
  })));
};
exports["default"] = MenuNavIconButton;