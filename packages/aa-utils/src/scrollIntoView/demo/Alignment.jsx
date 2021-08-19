/**
 * title: 对齐滚动
 * desc: `boundary` 设置边界 是个非标准属性
 */
import React, { useRef, useState } from 'react';
import { Select, Button } from 'antd';
import { scrollIntoView } from 'aa-utils';
import './index.less';

const Demo = () => {
  const itemsDomRef = useRef({});
  const [block, setBlock] = useState('center');
  const [inline, setInline] = useState('center');
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const doScroll = (value) =>
    scrollIntoView(itemsDomRef.current[value], {
      behavior: 'smooth',
      boundary: document.querySelector('.example-boundary'),
      block,
      inline,
    });

  return (
    <div>
      <Button type="primary" onClick={() => doScroll(1)}>
        1
      </Button>
      <Button type="primary" onClick={() => doScroll(5)}>
        5
      </Button>
      <Button type="primary" onClick={() => doScroll(9)}>
        9
      </Button>

      <Select label="Block" onChange={(value) => setBlock(value)} value={block}>
        <Select.Option value="start">Start</Select.Option>
        <Select.Option value="center">Center</Select.Option>
        <Select.Option value="end">End</Select.Option>
        <Select.Option value="nearest">Nearest</Select.Option>
      </Select>

      <Select label="Inline" onChange={(value) => setInline(value)} value={inline}>
        <Select.Option value="start">Start</Select.Option>
        <Select.Option value="center">Center</Select.Option>
        <Select.Option value="end">End</Select.Option>
        <Select.Option value="nearest">Nearest</Select.Option>
      </Select>
      <div className="scroll-container-2 example-boundary">
        <div style={{ width: 300 }} className="alignment-container">
          {range.map((value) => (
            <div key={value} className="scroll-item-container">
              <div
                className="scroll-item-2"
                key={value}
                ref={(el) => {
                  itemsDomRef.current[value] = el;
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
