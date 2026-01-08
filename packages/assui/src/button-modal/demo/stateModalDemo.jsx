import React, { useRef } from 'react';
import { Button } from 'antd';
import { ButtonModal } from 'assui';
import { useBoolean } from 'ahooks';

const Content = ({onClose}) => {

  return (
    <div>
      这是弹框内容122
      <Button type="primary" onClick={() => onClose()}>
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
      >
        <Content onClose={setFalse} />
      </ButtonModal>
    </div>
  );
};

export default Demo;
