"use strict";

var _excluded = ["children", "trigger", "onOpen", "onClose", "onConfirm", "onCancel"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var react_vant_1 = require("react-vant");
var ForwardRefButtonModal = React.forwardRef(function (props, ref) {
  var _React$useState = React.useState(false),
    visible = _React$useState[0],
    setModalVisible = _React$useState[1];
  var children = props.children,
    trigger = props.trigger,
    onOpen = props.onOpen,
    onClose = props.onClose,
    onConfirm = props.onConfirm,
    onCancel = props.onCancel,
    restModalProps = _objectWithoutPropertiesLoose(props, _excluded);
  var openModal = function openModal() {
    if (onOpen) {
      onOpen();
    }
    setModalVisible(true);
  };
  var closeModal = function closeModal() {
    if (onClose) {
      onClose();
    }
    setModalVisible(false);
  };
  var modalActionRef = React.useRef({
    open: openModal,
    close: closeModal
  });
  React.useImperativeHandle(ref, function () {
    return modalActionRef.current;
  });
  var handleModalOk = function handleModalOk(e) {
    if (onConfirm) {
      return onConfirm(e);
    }
    closeModal();
    return false;
  };
  var handleModalCancel = function handleModalCancel(e) {
    if (onCancel) {
      onCancel(e);
    }
    closeModal();
  };
  var buttonNode = trigger && React.cloneElement(trigger, {
    onClick: openModal
  });
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [buttonNode, (0, jsx_runtime_1.jsx)(react_vant_1.Dialog, _extends({
      visible: visible,
      onConfirm: handleModalOk,
      onCancel: handleModalCancel
    }, restModalProps, {
      children: (0, isFunction_1["default"])(children) ? children(modalActionRef.current) : React.cloneElement(children, {
        modalAction: modalActionRef.current
      })
    }))]
  });
});
exports["default"] = ForwardRefButtonModal;