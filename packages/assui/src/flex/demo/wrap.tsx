import React from 'react';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Button, Radio, Slider } from 'antd';
import { Flex } from 'assui';

const Demo: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<SizeType | 'customize'>('small');
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);

  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {['small', 'middle', 'large', 'customize'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      {gapSize === 'customize' && (
        <Slider value={customGapSize} onChange={setCustomGapSize} />
      )}
      <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Flex>
    </Flex>
  );
};

export default Demo;
