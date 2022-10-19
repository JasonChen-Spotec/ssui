import React from 'react';
import { KeepTab } from 'assui';

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

  return <KeepTab defaultActiveKey="2" onChange={onChange} items={items} />;
};

export default Demo;
