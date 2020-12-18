const defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      'bold',
      'italic',
      'strikethrough',
      'underline',
      '|',
      'fontBackgroundColor',
      'fontColor',
      'highlight',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'link',
      'imageInsert',
      'specialCharacters',
      'blockQuote',
      'undo',
      'redo',
      'CKFinder',
      'insertTable'
    ]
  },
  language: 'en', // or "zh-cn"
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  }
};

export default defaultConfig;
