import React from 'react';
import {
  MultiLineEllipsisText,
  Flex
} from 'assui';

const defaultText = `这是一段长文案，有以下这些内容：
  1. 文案带有一定的格式：换行、首行缩进等；
  2. 某些段落会很长，需要考虑自然换行的情况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况；
  3. ...的位置不一定在行末，可能会在行中间。`


const App: React.FC = () => {
  const [text, setText] = React.useState(defaultText);
  const [line, setLine] = React.useState(2);

  return (
    <Flex vertical gap={20}>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          style={{ width: 300 }}
      />
      <input
        onChange={(e) => setLine(+e.target.value)}
        style={{ width: 300 }}
      />
      <MultiLineEllipsisText
          text={text}
          lines={line}
          tipType="modal"
          buttonModalProps={{ title: '弹窗展示完整文案' }}
      />
      <MultiLineEllipsisText
          text={text}
          lines={line}
          tipType='tooltip'
      />
    </Flex>
  );
};

export default App;
