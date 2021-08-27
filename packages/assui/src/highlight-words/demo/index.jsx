import React from 'react';
import { HighlightWords } from 'assui';

const index = () => (
  <div>
    <HighlightWords
      highlightClassName="self"
      searchWords={['个', '2', '子']}
      autoEscape
      textToHighlight="这是一个有趣的例子 9527"
    />
  </div>
);

export default index;
