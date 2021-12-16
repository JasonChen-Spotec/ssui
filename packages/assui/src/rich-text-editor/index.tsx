// @ts-nocheck
import React from 'react';
import type { IAllProps } from '@tinymce/tinymce-react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'antd';
import type * as Type from 'tinymce/tinymce';
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

export type RichTextEditorProps = IAllProps;

const RichTextEditor = (props: IAllProps) => {
  const { init, ...restProps } = props;
  const editRef = React.useRef();
  const defaultInit = {
    height: 300,
    language: 'zh_CN',
    menubar: false,
    images_upload_handler() {},
    plugins: [
      ' autolink lists link image charmap  anchor',
      'searchreplace code fullscreen',
      'insertdatetime media table help wordcount',
    ],
    toolbar:
      'undo redo | formatselect | ' +
      'code bold italic color fontcolor backcolor | alignleft aligncenter ' +
      'alignright alignjustify table | image bullist numlist outdent indent | ' +
      'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    setup(editor: Type.Editor) {
      editRef.current = editor;

      editor.ui.registry.addButton('customInsertButton', {
        text: 'My Button',
        onAction(_) {
          editor.insertContent("&nbsp;<strong>It's my button!</strong>&nbsp;");
        },
      });

      const toTimeHtml = function (date) {
        return `<time datetime="${date.toString()}">${date.toDateString()}</time>`;
      };

      editor.ui.registry.addButton('customDateButton', {
        icon: 'insert-time',
        tooltip: 'Insert Current Date',
        disabled: true,
        onAction(_) {
          editor.insertContent(toTimeHtml(new Date()));
        },
        onSetup(buttonApi) {
          const editorEventCallback = function (eventApi) {
            buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
          };
          editor.on('NodeChange', editorEventCallback);

          /* onSetup should always return the unbind handlers */
          return function (buttonApi) {
            editor.off('NodeChange', editorEventCallback);
          };
        },
      });
    },
  };

  const resultInit = { ...defaultInit, ...init };

  return (
    <div className="test">
      <Editor {...restProps} init={resultInit} />;
      <Button
        onClick={() => {
          editRef.current.insertContent('<span>{{这是插入的tag}}</span>');
        }}
      >
        测试
      </Button>
    </div>
  );
};

export default RichTextEditor;
