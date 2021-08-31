/**
 * title: 正则
 * desc: 通过正则累计过滤
 */

import React from 'react';
import { Descriptions } from 'antd';
import { ConditionInput } from 'assui';

const Demo = () => {
  const onChange = (value) => {
    console.log('Received value: ', value);
  };

  return (
    <Descriptions layout="vertical" column={8}>
      <Descriptions.Item label="单个正则(只能输入数字和字母)" span={8}>
        <ConditionInput regexp={/[^\dA-Za-z]+/g} onChange={onChange} />
      </Descriptions.Item>
      <Descriptions.Item label="多个正则(前后不允许空格且不能能输入数字)" span={8}>
        <ConditionInput regexp={['\\s', /\d/g]} onChange={onChange} />
      </Descriptions.Item>
      <Descriptions.Item label="自定义不符合规则的字的替换值(如果输入数字和替换成p)" span={8}>
        <ConditionInput regexp={[{ pattern: /\d/g, replacement: 'p' }]} onChange={onChange} />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Demo;
