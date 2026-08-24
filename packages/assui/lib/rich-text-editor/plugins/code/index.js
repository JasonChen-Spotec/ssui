"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
// @ts-nocheck
var tinymce_1 = tslib_1.__importDefault(require("tinymce/tinymce"));
var global = tinymce_1["default"].util.Tools.resolve('tinymce.PluginManager');
var setContent = function setContent(editor, html) {
  editor.focus();
  editor.undoManager.transact(function () {
    editor.setContent(html);
  });
  editor.selection.setCursorLocation();
  editor.nodeChanged();
};
var getContent = function getContent(editor) {
  return editor.getContent({
    source_view: true
  });
};
var open = function open(editor) {
  var editorContent = getContent(editor);
  editor.windowManager.open({
    title: 'Source Code',
    size: 'large',
    body: {
      type: 'panel',
      items: [{
        type: 'textarea',
        name: 'code'
      }]
    },
    buttons: [{
      type: 'cancel',
      name: 'cancel',
      text: 'Cancel'
    }, {
      type: 'submit',
      name: 'save',
      text: 'Save',
      primary: true
    }],
    initialData: {
      code: editorContent
    },
    onSubmit: function onSubmit(api) {
      setContent(editor, api.getData().code);
      api.close();
    }
  });
};
var register$1 = function register$1(editor) {
  editor.addCommand('mceCodeEditor', function () {
    open(editor);
  });
};
var register = function register(editor) {
  var onAction = function onAction() {
    return editor.execCommand('mceCodeEditor');
  };
  editor.ui.registry.addButton('code', {
    text: 'Source code',
    tooltip: 'Source code',
    onAction: onAction
  });
  editor.ui.registry.addMenuItem('code', {
    icon: 'sourcecode',
    text: 'Source code',
    onAction: onAction
  });
};
function initCodePlugin() {
  global.add('code', function (editor) {
    register$1(editor);
    register(editor);
    return {};
  });
}
exports["default"] = initCodePlugin;