/**
 * title: 注意
 * desc: 当一个页面存在多个`KeepTab`时，请设置不同的`saveActiveKeyName`
 */

import React from 'react';
import { KeepTab } from 'assui';
import './index.modules.less';

const { TabPane } = KeepTab;

const Demo = () => {
  const onChange = (key) => {
    console.log('Received key: ', key);
  };

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
      count: 2,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
      disabled: true,
    },
  ];

  return (
    <div style={{ backgroundColor: '#f5f6fa', padding: 60 }}>
      <KeepTab
        defaultActiveKey="2"
        saveActiveKeyName="countDemo"
        className="assui-tabs-card"
        onChange={onChange}
        items={items}
      />
    </div>
  );
};

export default Demo;
