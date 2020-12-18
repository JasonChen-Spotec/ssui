import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from './editor/ckeditor';
import defaultConfig from './editor/defaultConfig';

import './editor/translations/zh-cn';

const RichTextEditor = props => {
  const { config, ...rest } = props;
  const finalConfig = {
    ...defaultConfig,
    ...config
  };
  return (
    <div className="rich-text-editor">
      <CKEditor
        editor={Editor}
        config={finalConfig}
        {...rest}
      />
    </div>
  );
};

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
