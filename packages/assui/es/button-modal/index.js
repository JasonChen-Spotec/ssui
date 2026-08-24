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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CloseOutlined from "a-icons/es/CloseOutlined";
import isPromise from "aa-utils/es/isPromise";
import useControllableValue from "ahooks/es/useControllableValue";
import Modal from "antd/es/modal";
import isFunction from 'lodash/isFunction';
var ButtonModal = function ButtonModal(props, ref) {
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'open',
      defaultValue: false
    }),
    visible = _useControllableValue[0],
    setModalVisible = _useControllableValue[1];
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
      if (isPromise(result)) {
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
  if (isFunction(trigger)) {
    triggerNode = trigger(openModal);
  } else {
    triggerNode = trigger && /*#__PURE__*/React.cloneElement(trigger, {
      onClick: openModal
    });
  }
  return _jsxs(_Fragment, {
    children: [triggerNode, _jsx(Modal, _extends({
      open: visible,
      onOk: handleModalOk,
      onCancel: handleModalCancel,
      centered: true,
      maskClosable: false,
      closeIcon: _jsx(CloseOutlined, {})
    }, restModalProps, {
      children: isFunction(children) ? children(modalActionRef.current) : /*#__PURE__*/React.cloneElement(children, {
        modalAction: modalActionRef.current
      })
    }))]
  });
};
var ForwardRefButtonModal = /*#__PURE__*/React.forwardRef(ButtonModal);
export default ForwardRefButtonModal;