"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var View = react_1["default"].forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    split = props.split,
    size = props.size;
  var viewStyle = {
    flex: 1,
    position: 'relative',
    outline: 'none'
  };
  if (!(0, isUndefined_1["default"])(size)) {
    if (split === 'vertical') {
      viewStyle.width = size;
    } else {
      viewStyle.height = size;
      viewStyle.display = 'flex';
    }
    viewStyle.flex = 'none';
  }
  return react_1["default"].createElement("div", {
    ref: ref,
    className: className,
    style: viewStyle
  }, children);
});
exports["default"] = View;