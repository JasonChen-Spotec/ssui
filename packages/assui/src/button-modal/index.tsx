import * as React from 'react';
import type { ModalProps } from 'antd/es/modal';
import Modal from 'antd/es/modal';

export interface ModalAction {
  open: () => void;
  close: () => void;
}

export interface ButtonModalProps extends ModalProps {
  onClose?: () => void;
  onOpen?: () => void;
  trigger: React.ReactElement;
  children: React.ReactElement;
}

const ButtonModal: React.ForwardRefRenderFunction<unknown, ButtonModalProps> = (props, ref) => {
  const [visible, setModalVisible] = React.useState(false);
  const { children, trigger, onOpen, onClose, onOk, onCancel, ...restModalProps } = props;

  const openModal = () => {
    if (onOpen) {
      onOpen();
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
    setModalVisible(false);
  };

  const modalActionRef = React.useRef<ModalAction>({ open: openModal, close: closeModal });

  React.useImperativeHandle(ref, () => modalActionRef.current);

  const handleModalOk = (e: React.MouseEvent<HTMLElement>) => {
    if (onOk) {
      return onOk(e);
    }

    closeModal();

    return null;
  };

  const handleModalCancel = (e: React.MouseEvent<HTMLElement>) => {
    if (onCancel) {
      onCancel(e);
    }

    closeModal();
  };

  const buttonNode =
    trigger &&
    React.cloneElement(trigger, {
      onClick: openModal,
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
        {React.cloneElement(children, { modalAction: modalActionRef.current })}
      </Modal>
    </>
  );
};

const ForwardRefButtonModal = React.forwardRef<unknown, ButtonModalProps>(ButtonModal);

export default ForwardRefButtonModal;
