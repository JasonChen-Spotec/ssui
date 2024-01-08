import * as React from 'react';
import isFunction from 'lodash/isFunction';
import type { ModalProps } from 'antd/lib/modal';
import Modal from 'antd/lib/modal';
import CloseOutlined from 'a-icons/lib/CloseOutlined';

export interface ModalAction {
  open: () => void;
  close: () => void;
}

export interface ButtonModalProps extends Omit<ModalProps, 'children'> {
  onClose?: () => void;
  onOpen?: () => void;
  trigger?: React.ReactElement;
  children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}

const ButtonModal: React.ForwardRefRenderFunction<unknown, ButtonModalProps> = (
  props,
  ref,
) => {
  const [visible, setModalVisible] = React.useState(false);
  const { children, trigger, onOpen, onClose, onOk, onCancel, ...restModalProps } = props;

  const openModal = () => {
    setModalVisible(true);
    onOpen?.();
  };

  const closeModal = () => {
    setModalVisible(false);
    onClose?.();
  };

  const modalActionRef = React.useRef<ModalAction>({
    open: openModal,
    close: closeModal,
  });

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
        open={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        centered
        maskClosable={false}
        closeIcon={<CloseOutlined />}
        {...restModalProps}
      >
        {isFunction(children)
          ? children(modalActionRef.current)
          : React.cloneElement(children, { modalAction: modalActionRef.current })}
      </Modal>
    </>
  );
};

const ForwardRefButtonModal = React.forwardRef<unknown, ButtonModalProps>(ButtonModal);

export default ForwardRefButtonModal;
