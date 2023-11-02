/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Radio } from 'antd';
import { Flex } from 'assui';

const baseStyle: React.CSSProperties = {
  width: '20%',
  height: 54,
};

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('horizontal');
  const [justify, setJustify] = React.useState<string>('center');
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>

      {value === 'horizontal' && (
        <Radio.Group value={justify} onChange={(e) => setJustify(e.target.value)}>
          <Radio value="center">center</Radio>
          <Radio value="space-between">space-between</Radio>
        </Radio.Group>
      )}
      <Flex vertical={value === 'vertical'} align="center" justify={justify}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
