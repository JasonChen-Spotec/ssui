/**
 * title: 基本
 * desc: children是一个element或者暴露了onClick事件的组件
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonDrawer } from 'assui';

const Content = ({ drawerAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);

export default () => (
  <div>
    <ButtonDrawer
      title="demo"
      footer={null}
      onClose={() => console.log('onClose')}
      trigger={
          (openDrawer)=><span onClick={openDrawer}>open drawer</span>
      }
    >
        {
          (drawerAction)=> <Content  drawerAction={drawerAction} />
        }
    </ButtonDrawer>
  </div>
);
