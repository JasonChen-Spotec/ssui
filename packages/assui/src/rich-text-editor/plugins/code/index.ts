// @ts-nocheck
import tinymce from 'tinymce/tinymce';

const global = tinymce.util.Tools.resolve('tinymce.PluginManager');

const setContent = function (editor, html) {
  editor.focus();
  editor.undoManager.transact(() => {
    editor.setContent(html);
  });
  editor.selection.setCursorLocation();
  editor.nodeChanged();
};
const getContent = function (editor) {
  return editor.getContent({ source_view: true });
};

const open = function (editor) {
  const editorContent = getContent(editor);
  editor.windowManager.open({
    title: 'Source Code',
    size: 'large',
    body: {
      type: 'panel',
      items: [
        {
          type: 'textarea',
          name: 'code',
        },
      ],
    },
    buttons: [
      {
        type: 'cancel',
        name: 'cancel',
        text: 'Cancel',
      },
      {
        type: 'submit',
        name: 'save',
        text: 'Save',
        primary: true,
      },
    ],
    initialData: { code: editorContent },
    onSubmit(api) {
      setContent(editor, api.getData().code);
      api.close();
    },
  });
};

const register$1 = function (editor) {
  editor.addCommand('mceCodeEditor', () => {
    open(editor);
  });
};

const register = function (editor) {
  const onAction = function () {
    return editor.execCommand('mceCodeEditor');
  };
  editor.ui.registry.addButton('code', {
    text: 'Source code',
    tooltip: 'Source code',
    onAction,
  });
  editor.ui.registry.addMenuItem('code', {
    icon: 'sourcecode',
    text: 'Source code',
    onAction,
  });
};

function initCodePlugin() {
  global.add('code', (editor) => {
    register$1(editor);
    register(editor);
    return {};
  });
}

export default initCodePlugin;
