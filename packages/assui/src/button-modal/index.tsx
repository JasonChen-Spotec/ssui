import * as React from 'react';
import isFunction from 'lodash/isFunction';
import type { ModalProps } from 'antd/lib/modal';
import Modal from 'antd/lib/modal';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { useControllableValue } from 'ahooks';

export interface ModalAction {
  open: () => void;
  close: () => void;
}

type ControlledProps = {
  open: boolean;
  onOpen?: () => void;
  onClose: () => void;
};

type UncontrolledProps = {
  onOpen?: () => void;
  onClose?: () => void;
};

export interface BaseButtonModalProps
  extends Omit<ModalProps, 'children'> {
  trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
  children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}

export type ButtonModalProps =
  | (BaseButtonModalProps & ControlledProps)
  | (BaseButtonModalProps & UncontrolledProps);

const ButtonModal = (props: ButtonModalProps) => {
  const {
    children, trigger, onOpen, onClose, onOk, onCancel, ...restModalProps
  } = props;
  const [visible, setModalVisible] = useControllableValue(props, { valuePropName: 'open' });

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

  const handleModalOk = (e: React.MouseEvent<HTMLElement>) => {
    onOk?.(e);
    closeModal();
  };

  const handleModalCancel = (e: React.MouseEvent<HTMLElement>) => {
    onCancel?.(e);
    closeModal();
  };

  let triggerNode;
  if (isFunction(trigger)) {
    triggerNode = trigger(openModal)
  } else {
    triggerNode = trigger &&
      React.cloneElement(trigger, {
        onClick: openModal,
      });
  }


  return (
    <>
      {triggerNode}
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

export default ButtonModal;
