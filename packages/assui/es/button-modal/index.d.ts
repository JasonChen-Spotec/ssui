import type { ModalProps } from 'antd/lib/modal';
import * as React from 'react';
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
declare const ForwardRefButtonModal: React.ForwardRefExoticComponent<
  ButtonModalProps & React.RefAttributes<unknown>
>;
export default ForwardRefButtonModal;
