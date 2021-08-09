var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor-cm';
import 'ckeditor-cm/build/translations/zh-cn.js';
import pickBy from 'lodash/pickBy';
import isValidValue from './isValidValue';

var RichTextEditor = function RichTextEditor(props) {
  var editorRef = useRef(null);

  var className = props.className,
      data = props.data,
      readOnly = props.readOnly,
      height = props.height,
      minHeight = props.minHeight,
      maxHeight = props.maxHeight,
      config = props.config,
      generateConfig = props.generateConfig,
      onReady = props.onReady,
      rest = __rest(props, ["className", "data", "readOnly", "height", "minHeight", "maxHeight", "config", "generateConfig", "onReady"]);

  useEffect(function () {
    maintainReadOnlyProps();
  }, [readOnly]);
  useEffect(function () {
    maintainHeightProps();
  }, [height, minHeight, maxHeight]);

  var maintainReadOnlyProps = function maintainReadOnlyProps() {
    if (editorRef && editorRef.current) {
      editorRef.current.isReadOnly = readOnly;
    }
  };

  var maintainHeightProps = function maintainHeightProps() {
    if (editorRef && editorRef.current) {
      var editor_1 = editorRef.current;
      editor_1.editing.view.change(function (writer) {
        var heightProps = pickBy({
          height: height,
          'min-height': minHeight,
          'max-height': maxHeight
        }, isValidValue);
        writer.setStyle(heightProps, editor_1.editing.view.document.getRoot());
      });
    }
  };

  var onEditorReady = function onEditorReady(editor) {
    editorRef.current = editor; // set is read-only property to editor instance

    maintainReadOnlyProps(); // set height properties via editor instance api

    maintainHeightProps();
    onReady && onReady(editor);
  };

  var finalConfig = Editor.defaultConfig;

  if (generateConfig) {
    finalConfig = generateConfig(finalConfig, config);
  } else {
    var configProps = pickBy(config, isValidValue);
    finalConfig = Object.assign({}, finalConfig, configProps);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('rich-text-editor', className)
  }, /*#__PURE__*/React.createElement(CKEditor, __assign({
    editor: Editor,
    data: data,
    config: finalConfig,
    onReady: onEditorReady
  }, rest)));
};

RichTextEditor.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
  readOnly: PropTypes.bool,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  config: PropTypes.shape({
    language: PropTypes.oneOf(['en', 'zh-cn']),
    toolbar: PropTypes.shape({
      items: PropTypes.array
    }),
    image: PropTypes.shape({
      toolbar: PropTypes.array
    }),
    table: PropTypes.shape({
      contentToolbar: PropTypes.array
    })
  }),
  generateConfig: PropTypes.func,
  onReady: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onError: PropTypes.func
};
RichTextEditor.displayName = 'RichTextEditor';
export default RichTextEditor;