/**
 * title: 基本
 * desc: children是一个element或者暴露了onClick事件的组件
 */

import React from 'react';
import { ColorSelect } from 'assui';
import { Tag, Form, Button } from 'antd';

export default () => {
  const onChange = (value) => {
    console.log('-value', value);
  };

  const onFinish = (values) => {
    console.log('-values', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        color: {
          hex: '#5BC466',
          rgb: '91,196,102',
        },
      }}
    >
      <Form.Item name="color" label="颜色">
        <ColorSelect
          onChange={onChange}
          renderExtra={(value) =>
            value && (
              <Tag
                style={{
                  marginLeft: 12,
                  height: 30,
                  lineHeight: '30px',
                  color: value?.hex,
                  backgroundColor: `rgba(${value.rgb}, 0.2)`,
                }}
              >
                {value.hex}
              </Tag>
            )
          }
        />
      </Form.Item>
      <Form.Item name="color2" label="颜色2">
        <ColorSelect
          onChange={onChange}
          renderExtra={(value) =>
            value && (
              <Tag
                style={{
                  marginLeft: 12,
                  height: 30,
                  lineHeight: '30px',
                  color: value?.hex,
                  backgroundColor: `rgba(${value.rgb}, 0.2)`,
                }}
              >
                {value.hex}
              </Tag>
            )
          }
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};
