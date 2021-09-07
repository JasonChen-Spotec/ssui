/**
 * title: 基本
 * desc: children是一个普通的element
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonModal } from 'assui';

const Content = ({ modalAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => modalAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);

export default () => (
  <div>
    <ButtonModal
      title="demo"
      footer={null}
      onCancel={() => console.log('onCancel')}
      content={<Content />}
    >
      <span>open modal</span>
    </ButtonModal>
  </div>
);
