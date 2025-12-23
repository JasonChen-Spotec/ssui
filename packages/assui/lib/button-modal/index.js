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
var React = __importStar(require("react"));
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var modal_1 = __importDefault(require("antd/lib/modal"));
var CloseOutlined_1 = __importDefault(require("a-icons/lib/CloseOutlined"));
var ahooks_1 = require("ahooks");
var ButtonModal = function ButtonModal(props, ref) {
  var _a = __read((0, ahooks_1.useControllableValue)(props, {
      valuePropName: 'open',
      defaultValue: false
    }), 2),
    visible = _a[0],
    setModalVisible = _a[1];
  var children = props.children,
    trigger = props.trigger,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onOk = props.onOk,
    onCancel = props.onCancel,
    restModalProps = __rest(props, ["children", "trigger", "onOpen", "onClose", "onOk", "onCancel"]);
  var openModal = function openModal() {
    setModalVisible(true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  };
  var closeModal = function closeModal() {
    setModalVisible(false);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var modalActionRef = React.useRef({
    open: openModal,
    close: closeModal
  });
  React.useImperativeHandle(ref, function () {
    return modalActionRef.current;
  });
  var handleModalOk = function handleModalOk(e) {
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
    closeModal();
  };
  var handleModalCancel = function handleModalCancel(e) {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
    closeModal();
  };
  var triggerNode;
  if ((0, isFunction_1["default"])(trigger)) {
    triggerNode = trigger(openModal);
  } else {
    triggerNode = trigger && React.cloneElement(trigger, {
      onClick: openModal
    });
  }
  return React.createElement(React.Fragment, null, triggerNode, React.createElement(modal_1["default"], __assign({
    open: visible,
    onOk: handleModalOk,
    onCancel: handleModalCancel,
    centered: true,
    maskClosable: false,
    closeIcon: React.createElement(CloseOutlined_1["default"], null)
  }, restModalProps), (0, isFunction_1["default"])(children) ? children(modalActionRef.current) : React.cloneElement(children, {
    modalAction: modalActionRef.current
  })));
};
var ForwardRefButtonModal = React.forwardRef(ButtonModal);
exports["default"] = ForwardRefButtonModal;