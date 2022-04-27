/**
 * title: Function
 * desc: children是一个Function
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonDrawer } from 'assui';

const Demo = () => (
  <ButtonDrawer
    title="demo"
    footer={null}
    onCancel={() => console.log('onCancel')}
    trigger={<span>open modal</span>}
  >
    {(drawerAction) => (
      <div>
        这是弹框内容
        <Button type="primary" onClick={() => drawerAction.close()}>
          点击这里关闭弹框
        </Button>
      </div>
    )}
  </ButtonDrawer>
);

export default Demo;
