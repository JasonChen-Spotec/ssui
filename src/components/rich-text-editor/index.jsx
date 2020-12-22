import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor-cm';
import 'ckeditor-cm/build/translations/zh-cn.js';
import pickBy from 'lodash/pickBy';
import isValidValue from './isValidValue';

const RichTextEditor = props => {
  const editorRef = useRef(null);
  const {
    className,
    data,
    readOnly,
    height,
    minHeight,
    maxHeight,
    config,
    generateConfig,
    onReady,
    ...rest
  } = props;

  useEffect(() => {
    maintainReadOnlyProps();
  }, [readOnly]);

  useEffect(() => {
    maintainHeightProps();
  }, [height, minHeight, maxHeight]);

  const maintainReadOnlyProps = () => {
    if (editorRef && editorRef.current) {
      editorRef.current.isReadOnly = readOnly;
    }
  };

  const maintainHeightProps = () => {
    if (editorRef && editorRef.current) {
      const editor = editorRef.current;
      editor.editing.view.change(writer => {
        const heightProps = pickBy({ height, 'min-height': minHeight, 'max-height': maxHeight }, isValidValue);
        writer.setStyle(heightProps, editor.editing.view.document.getRoot());
      });
    }
  };

  const onEditorReady = editor => {
    editorRef.current = editor;
    // set is read-only property to editor instance
    maintainReadOnlyProps();

    // set height properties via editor instance api
    maintainHeightProps();

    onReady && onReady(editor);
  };

  let finalConfig = Editor.defaultConfig;
  if (generateConfig) {
    finalConfig = generateConfig(finalConfig, config);
  } else {
    const configProps = pickBy(config, isValidValue);
    finalConfig = Object.assign({}, finalConfig, configProps);
  }

  return (
    <div className={classNames('rich-text-editor', className)}>
      <CKEditor
        editor={Editor}
        data={data}
        config={finalConfig}
        onReady={onEditorReady}
        {...rest}
      />
    </div>
  );
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
    }),
  }),
  generateConfig: PropTypes.func,
  onReady: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onError: PropTypes.func,
};

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
