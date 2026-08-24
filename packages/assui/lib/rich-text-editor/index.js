"use strict";

var _excluded = ["init"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToolbar = exports.defaultPlugins = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var tinymce_react_1 = require("@tinymce/tinymce-react");
var tinymce_1 = tslib_1.__importDefault(require("tinymce/tinymce"));
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
var code_1 = tslib_1.__importDefault(require("./plugins/code"));
var zh_CN_1 = tslib_1.__importDefault(require("./lang/zh_CN"));
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
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var resultInit = _extends({}, defaultInit, init);
  return (0, jsx_runtime_1.jsx)(tinymce_react_1.Editor, _extends({}, restProps, {
    init: resultInit
  }));
};
exports["default"] = RichTextEditor;