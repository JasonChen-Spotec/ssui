/**
 * title: 通过drawerAction.open 打开不同配置的抽屉
 * desc:  open可以接收参数
 */

// import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { Button, Drawer } from 'antd';
import { useDrawer } from 'aa-hooks';

const Content1 = ({ drawerAction }) => (
  <div>
    这是弹框内容1
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框1
    </Button>
  </div>
);
const Content2 = ({ drawerAction }) => (
  <div>
    这是弹框内容2
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框2
    </Button>
  </div>
);

export default () => {
  const [drawerProps1, { open: handleOpen1 }] = useDrawer({
    title: 'demo1',
    renderChildren: (drawerAction) => <Content1 drawerAction={drawerAction} />,
  });
  const [drawerProps2, { open: handleOpen2 }] = useDrawer({
    title: 'demo2',
    renderChildren: (drawerAction) => <Content2 drawerAction={drawerAction} />,
  });

  const handleOpen3 = () => {
    handleOpen2({
      title: 'demo3 - 动态传入title',
      renderChildren: (drawerAction) => (
        <div>
          这是弹框内容3
          <Button type="primary" onClick={() => drawerAction.close()}>
            点击这里关闭弹框3
          </Button>
        </div>
      ),
    });
  };
  return (
    <div>
      <Drawer {...drawerProps1} />
      <Drawer {...drawerProps2} />
      <Button onClick={() => handleOpen1()}>打开1</Button>
      <Button onClick={() => handleOpen2()}>打开2</Button>
      <Button onClick={handleOpen3}>打开3</Button>
    </div>
  );
};
