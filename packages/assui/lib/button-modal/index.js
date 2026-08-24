"use strict";

var _excluded = ["children", "trigger", "onOpen", "onClose", "onOk", "onCancel"];
function _empty() {}
function _awaitIgnored(value, direct) {
  if (!direct) {
    return value && value.then ? value.then(_empty) : Promise.resolve();
  }
}
function _invoke(body, then) {
  var result = body();
  if (result && result.then) {
    return result.then(then);
  }
  return then(result);
}
function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var CloseOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/CloseOutlined"));
var isPromise_1 = tslib_1.__importDefault(require("aa-utils/lib/isPromise"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var modal_1 = tslib_1.__importDefault(require("antd/lib/modal"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var ButtonModal = function ButtonModal(props, ref) {
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'open',
      defaultValue: false
    }),
    visible = _ref[0],
    setModalVisible = _ref[1];
  var children = props.children,
    trigger = props.trigger,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onOk = props.onOk,
    onCancel = props.onCancel,
    restModalProps = _objectWithoutPropertiesLoose(props, _excluded);
  var openModal = function openModal() {
    setModalVisible(true);
    onOpen == null || onOpen();
  };
  var closeModal = function closeModal() {
    setModalVisible(false);
    onClose == null || onClose();
  };
  var modalActionRef = React.useRef({
    open: openModal,
    close: closeModal
  });
  React.useImperativeHandle(ref, function () {
    return modalActionRef.current;
  });
  var handleModalOk = _async(function (e) {
    var result = onOk == null ? void 0 : onOk(e);
    return _invoke(function () {
      if ((0, isPromise_1["default"])(result)) {
        return _awaitIgnored(result);
      }
    }, function () {
      closeModal();
    });
  });
  var handleModalCancel = function handleModalCancel(e) {
    onCancel == null || onCancel(e);
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
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [triggerNode, (0, jsx_runtime_1.jsx)(modal_1["default"], _extends({
      open: visible,
      onOk: handleModalOk,
      onCancel: handleModalCancel,
      centered: true,
      maskClosable: false,
      closeIcon: (0, jsx_runtime_1.jsx)(CloseOutlined_1["default"], {})
    }, restModalProps, {
      children: (0, isFunction_1["default"])(children) ? children(modalActionRef.current) : React.cloneElement(children, {
        modalAction: modalActionRef.current
      })
    }))]
  });
};
var ForwardRefButtonModal = React.forwardRef(ButtonModal);
exports["default"] = ForwardRefButtonModal;