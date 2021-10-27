import React from 'react';
import type { IAllProps } from '@tinymce/tinymce-react';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/tinymce';
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
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/help';
import './lang/zh_CN';

const defaultInit = {
  height: 300,
  language: 'zh_CN',
  menubar: false,
  images_upload_handler() {},
  plugins: [
    ' autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount',
  ],
  toolbar:
    'undo redo | formatselect | ' +
    'bold italic color fontcolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify table | image bullist numlist outdent indent | ' +
    'removeformat | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
};

export type RichTextEditorProps = IAllProps;

const RichTextEditor = (props: IAllProps) => {
  const { init, ...restProps } = props;
  const resultInit = { ...defaultInit, ...init };

  return <Editor {...restProps} init={resultInit} />;
};

export default RichTextEditor;
