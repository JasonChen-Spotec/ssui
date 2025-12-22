import React, { useRef } from 'react';
import { Button } from 'antd';
import { ButtonModal } from 'assui';
import { useBoolean } from 'ahooks';

const Content = ({ modalAction }) => {

  console.log(modalAction, 'modalAction');
  return (
    <div>
      这是弹框内容122
      <Button type="primary" onClick={() => modalAction.close()}>
        点击这里关闭弹框1
      </Button>
    </div>
  );
};

const Demo = () => {
  const [state, { setTrue, setFalse }] = useBoolean(false);
  return (
    <div>
      <span onClick={setTrue}>state打开</span>

      <ButtonModal
        title="demo"
        onClose={setFalse}
        onOk={setFalse}
        onOpen={setTrue}
        open={state}
        trigger={
            (openModal)=> <Button disabled onClick={openModal}> disabled </Button>
          }
      >
        {
          (modalAction)=> <Content  modalAction={modalAction} />
        }
      </ButtonModal>
    </div>
  );
};

export default Demo;
