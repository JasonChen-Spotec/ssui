/**
 * title: 基本
 * desc: children是一个element或者暴露了onClick事件的组件
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonModal } from 'assui';

const Content = ({ modalAction }) => (
  <div>
    这是弹框内容111
    <Button type="primary" onClick={() => modalAction.close()}>
      点击这里关闭弹框11123123
    </Button>
  </div>
);

/** onOk后内置了close方法 所以modalAction没啥用 */
const handleOk1 = async (modalAction) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  console.log(1)
};

const handleOk2 = (modalAction) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(()=>{
    console.log(2)
  });
};

export default () => (
  <div>
    <ButtonModal
      title="demo"
      onCancel={() => console.log('onCancel')}
      trigger={
        (openModal)=><span onClick={openModal}>open modal</span>
      }
      onOk={handleOk1}
    >
       {
          (modalAction)=> <Content  modalAction={modalAction} />
        }
    </ButtonModal>
  </div>
);
