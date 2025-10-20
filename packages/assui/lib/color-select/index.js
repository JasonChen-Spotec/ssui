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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
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
var react_color_1 = require("react-color");
var react_1 = __importStar(require("react"));
var rc_trigger_1 = __importDefault(require("rc-trigger"));
var classnames_1 = __importDefault(require("classnames"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var ChevronRightOutlined_1 = __importDefault(require("a-icons/lib/ChevronRightOutlined"));
var context_1 = __importDefault(require("../config-provider/context"));
var messages_1 = __importStar(require("../messages"));
var ColorSelect = function ColorSelect(props) {
  var className = props.className,
    classNameWrap = props.classNameWrap,
    reactColorProps = props.reactColorProps,
    RcTriggerProps = props.RcTriggerProps,
    renderValueNode = props.renderValueNode,
    renderExtra = props.renderExtra;
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    onChangeValue = _a[1];
  var messages = (0, react_1.useContext)(context_1["default"]);
  var onChange = function onChange(nextValue) {
    onChangeValue({
      hex: nextValue.hex,
      rgb: "".concat(nextValue.rgb.r, ",").concat(nextValue.rgb.g, ",").concat(nextValue.rgb.b)
    });
  };
  var defaultValueNode = react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('color-select', className),
    tabIndex: 0
  }, value ? react_1["default"].createElement("div", {
    className: "color-select-value",
    style: value ? {
      backgroundColor: value.hex
    } : undefined
  }) : react_1["default"].createElement("span", {
    className: "color-select-placeholder"
  }, (0, messages_1["default"])(messages, messages_1.langTypeEnum.global, 'placeholder')), react_1["default"].createElement("div", {
    className: "color-select-arrow"
  }, react_1["default"].createElement(ChevronRightOutlined_1["default"], {
    rotate: 90
  })));
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('color-select-wrap', classNameWrap)
  }, react_1["default"].createElement(rc_trigger_1["default"], __assign({
    popupAlign: {
      points: ['tl', 'bl'],
      offset: [0, 3]
    },
    action: ['click']
  }, RcTriggerProps, {
    popup: react_1["default"].createElement(react_color_1.SketchPicker, __assign({
      width: "320px",
      color: value ? value.hex : undefined,
      onChange: onChange
    }, reactColorProps))
  }), renderValueNode ? renderValueNode(value) : defaultValueNode), renderExtra && renderExtra(value));
};
exports["default"] = ColorSelect;