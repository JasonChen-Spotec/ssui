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

  return (
    <div style={{ backgroundColor: '#f5f6fa', padding: 60 }}>
      <KeepTab
        defaultActiveKey="2"
        saveActiveKeyName="countDemo"
        className="assui-tabs-card"
        onChange={onChange}
      >
        <TabPane tab="Tab 1" key="1" count={2}>
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 232323
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </KeepTab>
    </div>
  );
};

export default Demo;
