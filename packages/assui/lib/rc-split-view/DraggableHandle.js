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
var DraggableHandle = function DraggableHandle(props) {
  var className = props.className,
    _onClick = props.onClick,
    _onDoubleClick = props.onDoubleClick,
    _onMouseDown = props.onMouseDown,
    _onTouchEnd = props.onTouchEnd,
    _onTouchStart = props.onTouchStart,
    children = props.children;
  return react_1["default"].createElement("div", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      return _onMouseDown(event);
    },
    onTouchStart: function onTouchStart(event) {
      event.preventDefault();
      _onTouchStart(event);
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();
      _onTouchEnd(event);
    },
    onClick: function onClick(event) {
      if (_onClick) {
        event.preventDefault();
        _onClick(event);
      }
    },
    onDoubleClick: function onDoubleClick(event) {
      if (_onDoubleClick) {
        event.preventDefault();
        _onDoubleClick(event);
      }
    }
  }, children);
};
exports["default"] = DraggableHandle;