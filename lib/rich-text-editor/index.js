"use strict";

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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

var classnames_1 = __importDefault(require("classnames"));

var ckeditor5_react_1 = require("@ckeditor/ckeditor5-react");

var ckeditor_cm_1 = __importDefault(require("ckeditor-cm"));

require("ckeditor-cm/build/translations/zh-cn.js");

var pickBy_1 = __importDefault(require("lodash/pickBy"));

var isValidValue_1 = __importDefault(require("./isValidValue"));

var RichTextEditor = function RichTextEditor(props) {
  var editorRef = react_1.useRef(null);

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

  react_1.useEffect(function () {
    maintainReadOnlyProps();
  }, [readOnly]);
  react_1.useEffect(function () {
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
        var heightProps = pickBy_1["default"]({
          height: height,
          'min-height': minHeight,
          'max-height': maxHeight
        }, isValidValue_1["default"]);
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

  var finalConfig = ckeditor_cm_1["default"].defaultConfig;

  if (generateConfig) {
    finalConfig = generateConfig(finalConfig, config);
  } else {
    var configProps = pickBy_1["default"](config, isValidValue_1["default"]);
    finalConfig = Object.assign({}, finalConfig, configProps);
  }

  return react_1["default"].createElement("div", {
    className: classnames_1["default"]('rich-text-editor', className)
  }, react_1["default"].createElement(ckeditor5_react_1.CKEditor, __assign({
    editor: ckeditor_cm_1["default"],
    data: data,
    config: finalConfig,
    onReady: onEditorReady
  }, rest)));
};

RichTextEditor.propTypes = {
  className: prop_types_1["default"].string,
  data: prop_types_1["default"].string,
  readOnly: prop_types_1["default"].bool,
  height: prop_types_1["default"].string,
  minHeight: prop_types_1["default"].string,
  maxHeight: prop_types_1["default"].string,
  config: prop_types_1["default"].shape({
    language: prop_types_1["default"].oneOf(['en', 'zh-cn']),
    toolbar: prop_types_1["default"].shape({
      items: prop_types_1["default"].array
    }),
    image: prop_types_1["default"].shape({
      toolbar: prop_types_1["default"].array
    }),
    table: prop_types_1["default"].shape({
      contentToolbar: prop_types_1["default"].array
    })
  }),
  generateConfig: prop_types_1["default"].func,
  onReady: prop_types_1["default"].func,
  onChange: prop_types_1["default"].func,
  onFocus: prop_types_1["default"].func,
  onBlur: prop_types_1["default"].func,
  onError: prop_types_1["default"].func
};
RichTextEditor.displayName = 'RichTextEditor';
exports["default"] = RichTextEditor;