function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useImperativeHandle } from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import useMount from "ahooks/es/useMount";
import useUnmount from "ahooks/es/useUnmount";
import classNames from 'classnames';
import JSONEditor from 'jsoneditor';
import isEqual from 'lodash/isEqual';
var JsonEditor = function JsonEditor(props, ref) {
  var options = props.options,
    className = props.className;
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var containerRef = React.useRef();
  var editorInstanceRef = React.useRef();
  useMount(function () {
    editorInstanceRef.current = new JSONEditor(containerRef.current, _extends({
      mode: 'code',
      indentation: 2
    }, options, {
      onChangeText: function onChangeText() {
        try {
          var _editorInstanceRef$cu;
          var currentJson = (_editorInstanceRef$cu = editorInstanceRef.current) == null ? void 0 : _editorInstanceRef$cu.get();
          setValue(currentJson);
        } catch (error) {
          console.log('error', error);
        }
      }
    }));
  });
  useImperativeHandle(ref, function () {
    return containerRef.current;
  });
  useEffect(function () {
    var _editorInstanceRef$cu2;
    if (value && !isEqual(value, (_editorInstanceRef$cu2 = editorInstanceRef.current) == null ? void 0 : _editorInstanceRef$cu2.get())) {
      var _editorInstanceRef$cu3;
      (_editorInstanceRef$cu3 = editorInstanceRef.current) == null || _editorInstanceRef$cu3.update(value);
    }
  }, [value]);
  useUnmount(function () {
    var _editorInstanceRef$cu4;
    (_editorInstanceRef$cu4 = editorInstanceRef.current) == null || _editorInstanceRef$cu4.destroy();
  });
  return _jsx("div", {
    ref: function ref(el) {
      return containerRef.current = el;
    },
    className: classNames('a-jason-editor', className)
  });
};
var ForwardRefJsonEditor = /*#__PURE__*/React.forwardRef(JsonEditor);
export default ForwardRefJsonEditor;