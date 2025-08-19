var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import useControllableValue from 'ahooks/es/useControllableValue';
import useMount from 'ahooks/es/useMount';
import useUnmount from 'ahooks/es/useUnmount';
import classNames from 'classnames';
import JSONEditor from 'jsoneditor';
import isEqual from 'lodash/isEqual';
import React, { useEffect, useImperativeHandle } from 'react';
var JsonEditor = function JsonEditor(props, ref) {
  var options = props.options,
    className = props.className;
  var _a = __read(useControllableValue(props), 2),
    value = _a[0],
    setValue = _a[1];
  var containerRef = React.useRef();
  var editorInstanceRef = React.useRef();
  useMount(function () {
    editorInstanceRef.current = new JSONEditor(
      containerRef.current,
      __assign(
        __assign(
          {
            mode: 'code',
            indentation: 2,
          },
          options,
        ),
        {
          onChangeText: function onChangeText() {
            var _a;
            try {
              var currentJson =
                (_a = editorInstanceRef.current) === null || _a === void 0
                  ? void 0
                  : _a.get();
              setValue(currentJson);
            } catch (error) {
              console.log('error', error);
            }
          },
        },
      ),
    );
  });
  useImperativeHandle(ref, function () {
    return containerRef.current;
  });
  useEffect(
    function () {
      var _a, _b;
      if (
        value &&
        !isEqual(
          value,
          (_a = editorInstanceRef.current) === null || _a === void 0 ? void 0 : _a.get(),
        )
      ) {
        (_b = editorInstanceRef.current) === null || _b === void 0
          ? void 0
          : _b.update(value);
      }
    },
    [value],
  );
  useUnmount(function () {
    var _a;
    (_a = editorInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
  });
  return /*#__PURE__*/ React.createElement('div', {
    ref: function ref(el) {
      return (containerRef.current = el);
    },
    className: classNames('a-jason-editor', className),
  });
};
var ForwardRefJsonEditor = /*#__PURE__*/ React.forwardRef(JsonEditor);
export default ForwardRefJsonEditor;
