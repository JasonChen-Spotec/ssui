import React from 'react';
import { KeepTab } from 'assui';

const { TabPane } = KeepTab;

const Demo = () => {
  const onChange = (key) => {
    console.log('Received key: ', key);
  };

  return (
    <KeepTab defaultActiveKey="2" onChange={onChange}>
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
  );
};

export default Demo;
