/**
 * title: 正则
 * desc: 通过正则累计过滤
 */

import React from 'react';
import { Descriptions } from 'antd';
import { LabelConditionInput } from 'assui';

const Demo = () => {
  const onChange = (value) => {
    console.log('Received value: ', value);
  };

  return (
    <Descriptions layout="vertical" column={8}>
      <Descriptions.Item span={8}>
        <LabelConditionInput
          label="单个正则(只能输入数字和字母)"
          regexp={/[^\dA-Za-z]+/g}
          onChange={onChange}
        />
      </Descriptions.Item>
      <Descriptions.Item span={8}>
        <LabelConditionInput
          label="多个正则(前后不允许空格且不能能输入数字)"
          regexp={['\\s', /\d/g]}
          onChange={onChange}
        />
      </Descriptions.Item>
      <Descriptions.Item span={8}>
        <LabelConditionInput
          label="自定义不符合规则的字的替换值(如果输入数字和替换成p)"
          regexp={[{ pattern: /\d/g, replacement: 'p' }]}
          onChange={onChange}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Demo;
