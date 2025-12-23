import * as React from 'react';
import type { ModalProps } from 'antd/lib/modal';
export interface ModalAction {
    open: () => void;
    close: () => void;
}
export interface ButtonModalProps extends Omit<ModalProps, 'children'> {
    onClose?: () => void;
    onOpen?: () => void;
    trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
    children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}
declare const ForwardRefButtonModal: React.ForwardRefExoticComponent<ButtonModalProps & React.RefAttributes<ModalAction>>;
/**
 * @deprecated 请改用受控方式（open / onOpen / onClose），不再推荐使用 ref
 */
export default ForwardRefButtonModal;
