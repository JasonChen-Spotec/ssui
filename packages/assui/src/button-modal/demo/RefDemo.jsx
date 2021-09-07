import React, { useRef } from 'react';
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

const Demo = () => {
  const modalRef = useRef();
  return (
    <div>
      <span onClick={() => modalRef.current.open()}>Ref打开</span>

      <ButtonModal
        title="demo"
        ref={modalRef}
        onCancel={() => console.log('onCancel')}
        onOk={() => modalRef.current.close()}
        content={<Content />}
      >
        <Button disabled> disabled </Button>
      </ButtonModal>
    </div>
  );
};

export default Demo;
