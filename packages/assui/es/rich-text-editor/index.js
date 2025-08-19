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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import 'tinymce/icons/default';
import 'tinymce/models/dom';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/themes/silver';
import tinymce from 'tinymce/tinymce';
// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/code';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import zhCN from './lang/zh_CN';
import initCodePlugin from './plugins/code';
tinymce.addI18n('zh-Hans', zhCN);
initCodePlugin();
var defaultPlugins = [
  'advlist',
  'autolink',
  'lists',
  'link',
  'image',
  'charmap',
  'anchor',
  'searchreplace',
  'visualblocks',
  'code',
  'fullscreen',
  'insertdatetime',
  'media',
  'table',
  'preview',
  'help',
];
var defaultToolbar =
  'undo redo | blocks fontsize | ' +
  'bold italic underline forecolor backcolor charmap | ' +
  'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help';
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
  font_size_formats:
    '10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px',
};
var RichTextEditor = function RichTextEditor(props) {
  var init = props.init,
    restProps = __rest(props, ['init']);
  var resultInit = __assign(__assign({}, defaultInit), init);
  return /*#__PURE__*/ React.createElement(
    Editor,
    __assign({}, restProps, {
      init: resultInit,
    }),
  );
};
export { defaultPlugins, defaultToolbar };
export default RichTextEditor;
