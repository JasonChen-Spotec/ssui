/**
 * title: 工厂模版用法
 * desc:  可以通过工厂hook生成不同配置的抽屉
 */

import { Button, Modal } from 'antd';
import {generateUseModal} from 'aa-hooks';

const Content = ({ modalAction }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => modalAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);
const useModal1 = generateUseModal({
  title: 'demo1',
  className: 'custom-modal-class',
  maskClosable: false,
  renderChildren: (modalAction) => <Content modalAction={modalAction} />,
});
const useModal2 = generateUseModal({
  title: 'demo2',
  className: 'custom-modal-class',
  maskClosable: true,
  renderChildren: (modalAction) => <Content modalAction={modalAction} />,
});

export default () => {
  const [modalProps1, { open: handleOpen1 }] = useModal1();
  const [modalProps2, { open: handleOpen2 }] = useModal2({});
  const [modalProps3, { open: handleOpen3 }] = useModal2({
    title: 'title3',
    renderChildren: () => 'test3'
  });
  return (
    <div>
      <Modal {...modalProps1} />
      <Modal {...modalProps2} />
      <Modal {...modalProps3} />
      <Button onClick={() => handleOpen1()}>打开1</Button>
      <Button onClick={() => handleOpen2()}>打开2</Button>
      <Button onClick={() => handleOpen3()}>打开3</Button>
      <Button onClick={() => handleOpen3({title: 'title4'})}>打开4</Button>
    </div>
  );
};
