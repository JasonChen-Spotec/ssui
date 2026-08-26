import * as React from 'react';
import type { ModalProps } from 'antd/lib/modal';
export interface ModalAction {
    open: () => void;
    close: () => void;
}
export interface ButtonModalProps extends Omit<ModalProps, 'children' | 'onOk'> {
    onClose?: () => void;
    onOpen?: () => void;
    onOk?: (v: React.MouseEvent<HTMLElement>) => void | Promise<void>;
    trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
    children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}
declare const ForwardRefButtonModal: React.ForwardRefExoticComponent<ButtonModalProps & React.RefAttributes<unknown>>;
export default ForwardRefButtonModal;
