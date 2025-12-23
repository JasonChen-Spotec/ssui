import React, { useRef } from 'react';
import { Button } from 'antd';
import { ButtonDrawer } from 'assui';

const Content = ({ drawerAction }) => {
  return (
    <div>
      这是弹框内容
      <Button type="primary" onClick={() => drawerAction.close()}>
        点击这里关闭弹框
      </Button>
    </div>
  );
};

const Demo = () => {
  const drawerRef = useRef();

  return (
    <div>
      <span onClick={() => drawerRef.current.open()}>Ref打开</span>

      <ButtonDrawer
        title="demo"
        ref={drawerRef}
        onCancel={() => console.log('onCancel')}
        onOk={() => drawerRef.current.close()}
        trigger={
              (openDrawer)=> <Button disabled onClick={openDrawer}> disabled </Button>
            }
        >
       {
          (drawerAction)=> <Content  drawerAction={drawerAction} />
        }
      </ButtonDrawer>
    </div>
  );
};

export default Demo;
