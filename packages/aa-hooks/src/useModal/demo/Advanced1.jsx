/**
 * title: 通过modalAction.open 打开不同配置的抽屉
 * desc:  open可以接收参数
 */

// import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { Button, Modal } from 'antd';
import { useModal } from 'aa-hooks';

const Content1 = ({ modalAction }) => (
  <div>
    这是弹框内容1
    <Button type="primary" onClick={() => modalAction.close()}>
      点击这里关闭弹框1
    </Button>
  </div>
);
const Content2 = ({ modalAction }) => (
  <div>
    这是弹框内容2
    <Button type="primary" onClick={() => modalAction.close()}>
      点击这里关闭弹框2
    </Button>
  </div>
);

export default () => {
  const [modalProps1, { open: handleOpen1 }] = useModal({
    title: 'demo1',
    renderChildren: (modalAction) => <Content1 modalAction={modalAction} />,
  });
  const [modalProps2, { open: handleOpen2 }] = useModal({
    title: 'demo2',
    renderChildren: (modalAction) => <Content2 modalAction={modalAction} />,
  });

  const handleOpen3 = () => {
    handleOpen2({
      title: 'demo3 - 动态传入title',
      renderChildren: (modalAction) => (
        <div>
          这是弹框内容3
          <Button type="primary" onClick={() => modalAction.close()}>
            点击这里关闭弹框3
          </Button>
        </div>
      ),
    });
  };
  return (
    <div>
      <Modal {...modalProps1} />
      <Modal {...modalProps2} />
      <Button onClick={() => handleOpen1()}>打开1</Button>
      <Button onClick={() => handleOpen2()}>打开2</Button>
      <Button onClick={handleOpen3}>打开3</Button>
    </div>
  );
};
