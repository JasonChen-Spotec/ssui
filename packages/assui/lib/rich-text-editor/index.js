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
exports.defaultToolbar = exports.defaultPlugins = void 0;
var react_1 = __importDefault(require("react"));
var tinymce_react_1 = require("@tinymce/tinymce-react");
var tinymce_1 = __importDefault(require("tinymce/tinymce"));
require("tinymce/themes/silver");
require("tinymce/models/dom");
require("tinymce/icons/default");
require("tinymce/skins/ui/oxide/skin.min.css");
// importing the plugin js.
require("tinymce/plugins/advlist");
require("tinymce/plugins/autolink");
require("tinymce/plugins/link");
require("tinymce/plugins/image");
require("tinymce/plugins/lists");
require("tinymce/plugins/charmap");
require("tinymce/plugins/anchor");
require("tinymce/plugins/searchreplace");
// import 'tinymce/plugins/code';
require("tinymce/plugins/fullscreen");
require("tinymce/plugins/insertdatetime");
require("tinymce/plugins/media");
require("tinymce/plugins/nonbreaking");
require("tinymce/plugins/table");
require("tinymce/plugins/template");
require("tinymce/plugins/help");
require("tinymce/plugins/quickbars");
require("tinymce/plugins/autosave");
require("tinymce/plugins/directionality");
require("tinymce/plugins/preview");
require("tinymce/plugins/save");
require("tinymce/plugins/visualblocks");
require("tinymce/plugins/autoresize");
require("tinymce/plugins/emoticons");
require("tinymce/plugins/importcss");
require("tinymce/plugins/pagebreak");
var code_1 = __importDefault(require("./plugins/code"));
var zh_CN_1 = __importDefault(require("./lang/zh_CN"));
tinymce_1["default"].addI18n('zh-Hans', zh_CN_1["default"]);
(0, code_1["default"])();
var defaultPlugins = ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'preview', 'help'];
exports.defaultPlugins = defaultPlugins;
var defaultToolbar = 'undo redo | blocks fontsize | ' + 'bold italic underline forecolor backcolor charmap | ' + 'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help';
exports.defaultToolbar = defaultToolbar;
var defaultInit = {
  height: 300,
  language: 'zh-Hans',
  menubar: false,
  // images_upload_handler() {},
  plugins: defaultPlugins,
  toolbar: defaultToolbar,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  font_size_input_default_unit: 'px',
  skin: false,
  font_size_formats: '10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px'
};
var RichTextEditor = function RichTextEditor(props) {
  var init = props.init,
    restProps = __rest(props, ["init"]);
  var resultInit = __assign(__assign({}, defaultInit), init);
  return react_1["default"].createElement(tinymce_react_1.Editor, __assign({}, restProps, {
    init: resultInit
  }));
};
exports["default"] = RichTextEditor;