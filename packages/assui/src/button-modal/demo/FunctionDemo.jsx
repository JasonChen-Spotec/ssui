/**
 * title: Function
 * desc: children是一个Function
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonModal } from 'assui';

const Demo = () => (
  <ButtonModal
    title="demo"
    footer={null}
    onCancel={() => console.log('onCancel')}
    trigger={<span>open modal</span>}
  >
    {(modalAction) => (
      <div>
        这是弹框内容
        <Button type="primary" onClick={() => modalAction.close()}>
          点击这里关闭弹框
        </Button>
      </div>
    )}
  </ButtonModal>
);

export default Demo;
