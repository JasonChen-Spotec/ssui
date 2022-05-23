/**
 * title: 基本
 * desc: children是一个element或者暴露了onClick事件的组件
 */

import React from 'react';
import { Button } from 'react-vant';
import { ButtonModal } from 'amssui';

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
      onCancel={() => console.log('onCancel')}
      trigger={<span>open modal</span>}
    >
      <Content />
    </ButtonModal>
  </div>
);
