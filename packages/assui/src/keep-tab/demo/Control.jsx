import React from 'react';
import { Button, Space } from 'antd';
import { KeepTab } from 'assui';
import { qsHelp } from 'aa-utils';

const { TabPane } = KeepTab;

const Demo = () => {
  const [activeKey, setActiveKey] = React.useState(qsHelp.getQueryObject().control || '1');
  const onChange = (key) => {
    setActiveKey(key);
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

  return (
    <div>
      <Space>
        <Button onClick={() => setActiveKey('1')}>to 1</Button>
        <Button onClick={() => setActiveKey('2')}>to 2</Button>
        <Button onClick={() => setActiveKey('3')}>to 3</Button>
      </Space>
      <KeepTab
        activeKey={activeKey}
        onChange={onChange}
        items={items}
        saveActiveKeyName="control"
      />
    </div>
  );
};

export default Demo;
