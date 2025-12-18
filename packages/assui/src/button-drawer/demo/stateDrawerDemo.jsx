import React, { useRef } from 'react';
import { Button } from 'antd';
import { ButtonDrawer } from 'assui';
import { useBoolean } from 'ahooks';

const Content = ({ drawerAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);

const Demo = () => {
    const [state, { setTrue, setFalse }] = useBoolean(false);

  return (
    <div>
      <span onClick={setTrue}>state打开</span>

      <ButtonDrawer
        title="demo"
        onClose={setFalse}
        open={state}
        trigger={<Button disabled> disabled </Button>}
      >
        <Content />
      </ButtonDrawer>
    </div>
  );
};

export default Demo;
