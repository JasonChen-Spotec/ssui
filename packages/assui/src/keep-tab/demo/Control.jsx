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

  return (
    <div>
      <Space>
        <Button onClick={() => setActiveKey('1')}>to 1</Button>
        <Button onClick={() => setActiveKey('2')}>to 2</Button>
        <Button onClick={() => setActiveKey('3')}>to 3</Button>
      </Space>
      <KeepTab activeKey={activeKey} onChange={onChange} saveActiveKeyName="control">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3" disabled>
          Content of Tab Pane 3
        </TabPane>
      </KeepTab>
    </div>
  );
};

export default Demo;
