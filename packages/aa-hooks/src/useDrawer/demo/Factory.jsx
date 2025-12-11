/**
 * title: 工厂模版用法
 * desc:  可以通过工厂hook生成不同配置的抽屉
 */

import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { generateUseDrawer } from 'aa-hooks/lib';
import { Button, Drawer } from 'antd';

const Content = ({ drawerAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);
const useDrawer1 = generateUseDrawer({
  title: 'demo1',
  className: 'custom-drawer-class',
  maskClosable: false,
  closeIcon: <CloseOutlined />,
  onBeforeOpen: () => {
    console.log('onBeforeOpen1');
  },
  onBeforeClose: () => {
    console.log('onBeforeClose1');
  },
  renderChildren: (drawerAction) => <Content drawerAction={drawerAction} />,
});
const useDrawer2 = generateUseDrawer({
  title: 'demo2',
  className: 'custom-drawer-class',
  maskClosable: true,
  closeIcon: <CloseOutlined />,
  onBeforeOpen: () => {
    console.log('onBeforeOpen2');
  },
  onBeforeClose: () => {
    console.log('onBeforeClose2');
  },
  renderChildren: (drawerAction) => <Content drawerAction={drawerAction} />,
});

export default () => {
  const [drawerProps1, { open: handleOpen1 }] = useDrawer1();
  const [drawerProps2, { open: handleOpen2 }] = useDrawer2();
  const [drawerProps3, { open: handleOpen3 }] = useDrawer2({
    title: 'demo3 - 动态传入title',
    onBeforeOpen: () => {
      console.log('onBeforeOpen3');
    },
    onBeforeClose: () => {
      console.log('onBeforeClose3');
    },
  });
  return (
    <div>
      <Drawer {...drawerProps1} />
      <Drawer {...drawerProps2} />
      <Drawer {...drawerProps3} />
      <Button onClick={handleOpen1}>打开1</Button>
      <Button onClick={handleOpen2}>打开2</Button>
      <Button onClick={handleOpen3}>打开3</Button>
    </div>
  );
};
