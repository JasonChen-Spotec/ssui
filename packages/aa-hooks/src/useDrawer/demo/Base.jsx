/**
 * title: 基本
 * desc: 返回参数第一个参数是给antd Drawer 组件的属性，第二个参数是控制抽屉打开关闭的方法集合
 */

import { useDrawer } from 'aa-hooks/lib';
import { Button, Drawer } from 'antd';
import React from 'react';

const Content = ({ handleClose }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => handleClose()}>
      点击这里关闭弹框
    </Button>
  </div>
);

export default () => {
  const [drawerProps, { open: handleOpen, close: handleClose }] = useDrawer({
    onBeforeOpen: () => {
      console.log('onBeforeOpen');
    },
    onBeforeClose: () => {
      console.log('onBeforeClose');
    },
  });

  return (
    <div>
      <Drawer {...drawerProps} title="demo">
        <Content handleClose={handleClose} />
      </Drawer>
      <Button onClick={handleOpen}>打开</Button>
    </div>
  );
};
