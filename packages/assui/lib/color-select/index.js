"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_color_1 = require("react-color");
var react_1 = require("react");
var rc_trigger_1 = tslib_1.__importDefault(require("rc-trigger"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var ChevronRightOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/ChevronRightOutlined"));
var context_1 = tslib_1.__importDefault(require("../config-provider/context"));
var messages_1 = tslib_1.__importStar(require("../messages"));
var ColorSelect = function ColorSelect(props) {
  var className = props.className,
    classNameWrap = props.classNameWrap,
    reactColorProps = props.reactColorProps,
    RcTriggerProps = props.RcTriggerProps,
    renderValueNode = props.renderValueNode,
    renderExtra = props.renderExtra;
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    onChangeValue = _ref[1];
  var messages = (0, react_1.useContext)(context_1["default"]);
  var onChange = function onChange(nextValue) {
    onChangeValue({
      hex: nextValue.hex,
      rgb: nextValue.rgb.r + "," + nextValue.rgb.g + "," + nextValue.rgb.b
    });
  };
  var defaultValueNode = (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])('color-select', className),
    tabIndex: 0,
    children: [value ? (0, jsx_runtime_1.jsx)("div", {
      className: "color-select-value",
      style: value ? {
        backgroundColor: value.hex
      } : undefined
    }) : (0, jsx_runtime_1.jsx)("span", {
      className: "color-select-placeholder",
      children: (0, messages_1["default"])(messages, messages_1.langTypeEnum.global, 'placeholder')
    }), (0, jsx_runtime_1.jsx)("div", {
      className: "color-select-arrow",
      children: (0, jsx_runtime_1.jsx)(ChevronRightOutlined_1["default"], {
        rotate: 90
      })
    })]
  });
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])('color-select-wrap', classNameWrap),
    children: [(0, jsx_runtime_1.jsx)(rc_trigger_1["default"], _extends({
      popupAlign: {
        points: ['tl', 'bl'],
        offset: [0, 3]
      },
      action: ['click']
    }, RcTriggerProps, {
      popup: (0, jsx_runtime_1.jsx)(react_color_1.SketchPicker, _extends({
        width: "320px",
        color: value ? value.hex : undefined,
        onChange: onChange
      }, reactColorProps)),
      children: renderValueNode ? renderValueNode(value) : defaultValueNode
    })), renderExtra && renderExtra(value)]
  });
};
exports["default"] = ColorSelect;