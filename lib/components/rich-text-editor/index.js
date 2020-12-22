"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ckeditor5React = require("@ckeditor/ckeditor5-react");

var _ckeditorCm = _interopRequireDefault(require("ckeditor-cm"));

require("ckeditor-cm/build/translations/zh-cn.js");

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _isValidValue = _interopRequireDefault(require("./isValidValue"));

var RichTextEditor = function RichTextEditor(props) {
  var editorRef = (0, _react.useRef)(null);
  var className = props.className,
      data = props.data,
      readOnly = props.readOnly,
      height = props.height,
      minHeight = props.minHeight,
      maxHeight = props.maxHeight,
      config = props.config,
      generateConfig = props.generateConfig,
      onReady = props.onReady,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["className", "data", "readOnly", "height", "minHeight", "maxHeight", "config", "generateConfig", "onReady"]);
  (0, _react.useEffect)(function () {
    maintainReadOnlyProps();
  }, [readOnly]);
  (0, _react.useEffect)(function () {
    maintainHeightProps();
  }, [height, minHeight, maxHeight]);

  var maintainReadOnlyProps = function maintainReadOnlyProps() {
    if (editorRef && editorRef.current) {
      editorRef.current.isReadOnly = readOnly;
    }
  };

  var maintainHeightProps = function maintainHeightProps() {
    if (editorRef && editorRef.current) {
      var editor = editorRef.current;
      editor.editing.view.change(function (writer) {
        var heightProps = (0, _pickBy["default"])({
          height: height,
          'min-height': minHeight,
          'max-height': maxHeight
        }, _isValidValue["default"]);
        writer.setStyle(heightProps, editor.editing.view.document.getRoot());
      });
    }
  };

  var onEditorReady = function onEditorReady(editor) {
    editorRef.current = editor; // set is read-only property to editor instance

    maintainReadOnlyProps(); // set height properties via editor instance api

    maintainHeightProps();
    onReady && onReady(editor);
  };

  var finalConfig = _ckeditorCm["default"].defaultConfig;

  if (generateConfig) {
    finalConfig = generateConfig(finalConfig, config);
  } else {
    var configProps = (0, _pickBy["default"])(config, _isValidValue["default"]);
    finalConfig = Object.assign({}, finalConfig, configProps);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rich-text-editor', className)
  }, /*#__PURE__*/_react["default"].createElement(_ckeditor5React.CKEditor, (0, _extends2["default"])({
    editor: _ckeditorCm["default"],
    data: data,
    config: finalConfig,
    onReady: onEditorReady
  }, rest)));
};

RichTextEditor.propTypes = {
  className: _propTypes["default"].string,
  data: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  height: _propTypes["default"].string,
  minHeight: _propTypes["default"].string,
  maxHeight: _propTypes["default"].string,
  config: _propTypes["default"].shape({
    language: _propTypes["default"].oneOf(['en', 'zh-cn']),
    toolbar: _propTypes["default"].shape({
      items: _propTypes["default"].array
    }),
    image: _propTypes["default"].shape({
      toolbar: _propTypes["default"].array
    }),
    table: _propTypes["default"].shape({
      contentToolbar: _propTypes["default"].array
    })
  }),
  generateConfig: _propTypes["default"].func,
  onReady: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onError: _propTypes["default"].func
};
RichTextEditor.displayName = 'RichTextEditor';
var _default = RichTextEditor;
exports["default"] = _default;