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
var react_1 = __importStar(require("react"));
var drawer_1 = __importDefault(require("antd/lib/drawer"));
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var classnames_1 = __importDefault(require("classnames"));
var CloseOutlined_1 = __importDefault(require("a-icons/lib/CloseOutlined"));
var ahooks_1 = require("ahooks");
var ButtonDrawer = function ButtonDrawer(props, ref) {
  var _a = __read((0, ahooks_1.useControllableValue)(props, {
      valuePropName: 'open'
    }), 2),
    drawerVisible = _a[0],
    setDrawerVisible = _a[1];
  var children = props.children,
    onOpen = props.onOpen,
    onClose = props.onClose,
    trigger = props.trigger,
    title = props.title,
    className = props.className,
    restProps = __rest(props, ["children", "onOpen", "onClose", "trigger", "title", "className"]);
  var isControl = ('open' in props);
  var closeDrawer = function closeDrawer() {
    if (!isControl) {
      setDrawerVisible(false);
    }
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var openDrawer = function openDrawer() {
    if (!isControl) {
      setDrawerVisible(true);
    }
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  };
  var actionRef = (0, react_1.useRef)({
    open: openDrawer,
    close: closeDrawer
  });
  (0, react_1.useImperativeHandle)(ref, function () {
    return actionRef.current;
  });
  var triggerNode;
  if ((0, isFunction_1["default"])(trigger)) {
    triggerNode = trigger(openDrawer);
  } else {
    triggerNode = trigger && react_1["default"].cloneElement(trigger, {
      onClick: function onClick(e) {
        var _a, _b;
        (_b = (_a = trigger.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        openDrawer();
      }
    });
  }
  return react_1["default"].createElement(react_1["default"].Fragment, null, triggerNode, react_1["default"].createElement(drawer_1["default"], __assign({
    maskClosable: false,
    className: (0, classnames_1["default"])('button-drawer', className),
    title: title,
    onClose: closeDrawer,
    open: drawerVisible,
    closeIcon: react_1["default"].createElement(CloseOutlined_1["default"], null)
  }, restProps), (0, isFunction_1["default"])(children) ? children(actionRef.current) : react_1["default"].cloneElement(children, {
    drawerAction: actionRef.current
  })));
};
var ForwardRefButtonDrawer = react_1["default"].forwardRef(ButtonDrawer);
exports["default"] = ForwardRefButtonDrawer;