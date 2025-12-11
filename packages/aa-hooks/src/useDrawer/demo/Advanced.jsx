/**
 * title: 进阶用法
 * desc: 所有的属性都可以通过 useDrawer 传入
 */

import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { useDrawer } from 'aa-hooks/lib';
import { Button, Drawer } from 'antd';
import React from 'react';

const Content = ({ drawerAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);

export default () => {
  const [drawerProps, { open: handleOpen }] = useDrawer({
    title: 'demo',
    className: 'custom-drawer-class',
    maskClosable: false,
    closeIcon: <CloseOutlined />,
    onBeforeOpen: () => {
      console.log('onBeforeOpen');
    },
    onBeforeClose: () => {
      console.log('onBeforeClose');
    },
    renderChildren: (drawerAction) => <Content drawerAction={drawerAction} />,
  });

  return (
    <div>
      <Drawer {...drawerProps} />
      <Button onClick={handleOpen}>打开</Button>
    </div>
  );
};
