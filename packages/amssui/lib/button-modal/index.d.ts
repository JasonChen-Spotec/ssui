import * as React from 'react';
import type { DialogProps } from 'react-vant/lib/dialog/PropsType';
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
declare const ForwardRefButtonModal: React.ForwardRefRenderFunction<ModalAction, ButtonModalProps>;
export default ForwardRefButtonModal;
