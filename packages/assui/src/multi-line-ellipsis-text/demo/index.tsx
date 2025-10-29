import React from 'react';
import {
  MultiLineEllipsisText,
  Flex
} from 'assui';
import  './index.less'

const defaultText = `我是一段长文案，
点击我也许可以查看以下完整信息：
  1. 文案带有一定的格式：换行、首行缩进等；
  2. 某些段落会很长，需要考虑自然换行的情况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况况；
  3. ...的位置不一定在行末，可能会在行中间。`


const Demo = () => {
  const [text, setText] = React.useState(defaultText);
  const [line, setLine] = React.useState(4);

  return (
    <Flex vertical gap={40}>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          style={{ width: 300 }}
      />
      <input
        value={line}
        onChange={(e) => setLine(+e.target.value)}
        style={{ width: 300 }}
      />
      <div>
        <h4>方案一：弹窗展示</h4>
        <MultiLineEllipsisText
          text={text}
          lines={line}
          tipType="modal"
          className="red-border"
          buttonModalProps={{ title: '弹窗展示完整文案' }}
        />
      </div>
      <div>
        <h4>方案二：浮窗展示</h4>
        <MultiLineEllipsisText
          text={text}
          lines={line}
          tipType='tooltip'
          className="red-border"
        />
      </div>
      <div>
        <h4>方案三：溢出省略，不展示完整文案</h4>
        <MultiLineEllipsisText
          text={text}
          lines={line}
          className="red-border"
        />
      </div>
    </Flex>
  );
};

export default Demo;
