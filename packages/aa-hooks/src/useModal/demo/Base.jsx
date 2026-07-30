/**
 * title: 基本
 * desc: 返回参数第一个参数是给antd Modal 组件的属性，第二个参数是控制抽屉打开关闭的方法集合
 */

import { useModal } from 'aa-hooks';
import { Button, Modal } from 'antd';

const Content = ({ handleClose }) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => handleClose()}>
      点击这里关闭弹框
    </Button>
  </div>
);

export default () => {
  const [{open,onCancel}, { open: handleOpen, close: handleClose }] = useModal();
  console.log('open', open)
  return (
    <div>
      <Modal open={open} onCancel={onCancel} title="demo">
        <Content handleClose={handleClose} />
      </Modal>
      <Button onClick={() => handleOpen()}>打开</Button>
    </div>
  );
};
