import React from 'react';
import type { IAllProps } from '@tinymce/tinymce-react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';

import 'tinymce/themes/silver';
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
// import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/help';
import './plugins/code';
import zhCN from './lang/zh_CN';

tinymce.addI18n('zh_CN', zhCN);

export type RichTextEditorProps = IAllProps;

const defaultPlugins = [
  'autolink lists link image charmap  anchor',
  'searchreplace code fullscreen',
  'insertdatetime media table help wordcount',
];

const defaultToolbar =
  'undo redo | formatselect | ' +
  'code bold italic color fontcolor backcolor | alignleft aligncenter ' +
  'alignright alignjustify table | image bullist numlist outdent indent | ' +
  'removeformat | help';

const defaultInit = {
  height: 300,
  language: 'zh_CN',
  menubar: false,
  images_upload_handler() {},
  plugins: defaultPlugins,
  toolbar: defaultToolbar,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
};

const RichTextEditor = (props: IAllProps) => {
  const { init, ...restProps } = props;

  const resultInit = { ...defaultInit, ...init };

  return <Editor {...restProps} init={resultInit} />;
};

export { defaultPlugins, defaultToolbar };

export default RichTextEditor;
