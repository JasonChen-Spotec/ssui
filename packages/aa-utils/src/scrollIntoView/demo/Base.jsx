import React, { useRef } from 'react';
import { Input, Select, Form, Button, Row, Col } from 'antd';
import { scrollIntoView } from 'aa-utils';
import './index.less';

const Demo = () => {
  const itemsDomRef = useRef({});
  const range = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  const doScroll = (value) =>
    scrollIntoView(itemsDomRef.current[value], {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });

  return (
    <div>
      <Button type="primary" onClick={() => doScroll('C')}>
        C
      </Button>
      <Button type="primary" onClick={() => doScroll('D')}>
        D
      </Button>
      <Button type="primary" onClick={() => doScroll('F')}>
        F
      </Button>
      <div className="scroll-container-1">
        {range.map((value) => (
          <div
            className="scroll-item-1"
            key={value}
            ref={(el) => {
              itemsDomRef.current[value] = el;
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
