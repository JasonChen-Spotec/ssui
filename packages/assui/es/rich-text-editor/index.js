var _excluded = ["init"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/models/dom';
import 'tinymce/icons/default';
import 'tinymce/skins/ui/oxide/skin.min.css';
// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/help';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/save';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/pagebreak';
import initCodePlugin from './plugins/code';
import zhCN from './lang/zh_CN';
tinymce.addI18n('zh-Hans', zhCN);
initCodePlugin();
var defaultPlugins = ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'preview', 'help'];
var defaultToolbar = 'undo redo | blocks fontsize | ' + 'bold italic underline forecolor backcolor charmap | ' + 'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' + 'removeformat | help';
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
  return _jsx(Editor, _extends({}, restProps, {
    init: resultInit
  }));
};
export { defaultPlugins, defaultToolbar };
export default RichTextEditor;