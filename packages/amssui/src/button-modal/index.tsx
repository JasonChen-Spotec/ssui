import * as React from 'react';
import isFunction from 'lodash/isFunction';
import type { DialogProps } from 'react-vant/lib/dialog/PropsType';
import Dialog from 'react-vant/lib/dialog';

export interface ModalAction {
  open: () => void;
  close: () => void;
}

export interface ButtonModalProps extends Omit<DialogProps, 'children'> {
  onClose?: () => void;
  onOpen?: () => void;
  trigger?: React.ReactElement;
  children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}

const ButtonModal: React.ForwardRefRenderFunction<unknown, ButtonModalProps> = (props, ref) => {
  const [visible, setModalVisible] = React.useState(false);
  const { children, trigger, onOpen, onClose, onConfirm, onCancel, ...restModalProps } = props;

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

  const modalActionRef = React.useRef<ModalAction>({
    open: openModal,
    close: closeModal,
  });

  React.useImperativeHandle(ref, () => modalActionRef.current);

  const handleModalOk = (e: React.MouseEvent) => {
    if (onConfirm) {
      return onConfirm(e);
    }

    closeModal();

    return false;
  };

  const handleModalCancel = (e: React.MouseEvent) => {
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
      <Dialog
        visible={visible}
        onConfirm={handleModalOk}
        onCancel={handleModalCancel}
        {...restModalProps}
      >
        {isFunction(children)
          ? children(modalActionRef.current)
          : React.cloneElement(children, { modalAction: modalActionRef.current })}
      </Dialog>
    </>
  );
};

const ForwardRefButtonModal = React.forwardRef<unknown, ButtonModalProps>(ButtonModal);

export default ForwardRefButtonModal;
