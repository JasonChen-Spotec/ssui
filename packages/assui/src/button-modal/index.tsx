import * as React from 'react';
import Modal, { ModalProps } from 'antd/lib/modal';

export interface refProps {
  open: () => void;
  close: () => void;
}

export interface ButtonModalProps extends ModalProps {
  content: React.ReactElement;
  children: React.ReactElement;
}

const ButtonModal: React.ForwardRefRenderFunction<unknown, ButtonModalProps> = (props, ref) => {
  const [visible, setModalVisible] = React.useState(false);

  const open = () => setModalVisible(true);

  const close = () => setModalVisible(false);

  const modalActionRef = React.useRef({ open, close });

  const { children, content, onOk, onCancel, ...restModalProps } = props;

  React.useImperativeHandle(ref, () => ({ open, close }), [modalActionRef]);

  const handleButtonClick = () => {
    open();
  };

  const handleModalOk = (e: React.MouseEvent<HTMLElement>) => {
    if (onOk) {
      return onOk(e);
    }

    close();
  };

  const handleModalCancel = (e: React.MouseEvent<HTMLElement>) => {
    if (onCancel) {
      onCancel(e);
    }

    close();
  };

  const buttonNode =
    children &&
    React.cloneElement(children, {
      onClick: handleButtonClick,
    });

  return (
    <>
      {buttonNode}
      <Modal
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        centered
        maskClosable={false}
        {...restModalProps}
      >
        {React.cloneElement(content, { modalAction: modalActionRef.current })}
      </Modal>
    </>
  );
};

const ForwardRefButtonModal = React.forwardRef<unknown, ButtonModalProps>(ButtonModal);

export default ForwardRefButtonModal;
