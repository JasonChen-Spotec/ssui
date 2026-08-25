"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var jsoneditor_1 = tslib_1.__importDefault(require("jsoneditor"));
var react_1 = tslib_1.__importStar(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var useMount_1 = tslib_1.__importDefault(require("ahooks/lib/useMount"));
var isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
var useUnmount_1 = tslib_1.__importDefault(require("ahooks/lib/useUnmount"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var JsonEditor = function JsonEditor(props, ref) {
  var options = props.options,
    className = props.className;
  var _ref = (0, useControllableValue_1["default"])(props),
    value = _ref[0],
    setValue = _ref[1];
  var containerRef = react_1["default"].useRef();
  var editorInstanceRef = react_1["default"].useRef();
  (0, useMount_1["default"])(function () {
    editorInstanceRef.current = new jsoneditor_1["default"](containerRef.current, _extends({
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
  (0, react_1.useImperativeHandle)(ref, function () {
    return containerRef.current;
  });
  (0, react_1.useEffect)(function () {
    var _editorInstanceRef$cu2;
    if (value && !(0, isEqual_1["default"])(value, (_editorInstanceRef$cu2 = editorInstanceRef.current) == null ? void 0 : _editorInstanceRef$cu2.get())) {
      var _editorInstanceRef$cu3;
      (_editorInstanceRef$cu3 = editorInstanceRef.current) == null || _editorInstanceRef$cu3.update(value);
    }
  }, [value]);
  (0, useUnmount_1["default"])(function () {
    var _editorInstanceRef$cu4;
    (_editorInstanceRef$cu4 = editorInstanceRef.current) == null || _editorInstanceRef$cu4.destroy();
  });
  return (0, jsx_runtime_1.jsx)("div", {
    ref: function ref(el) {
      return containerRef.current = el;
    },
    className: (0, classnames_1["default"])('a-jason-editor', className)
  });
};
var ForwardRefJsonEditor = react_1["default"].forwardRef(JsonEditor);
exports["default"] = ForwardRefJsonEditor;