import * as React from 'react';
import type { DialogProps } from 'react-vant/lib/dialog/PropsType';
export interface ModalAction {
    open: () => void;
    close: () => void;
}
export interface ButtonModalProps extends Omit<DialogProps, 'children'> {
    onClose?: () => void;
    onOpen?: () => void;
    trigger?: React.ReactElement<{
        onClick?: React.MouseEventHandler;
    }>;
    children: ((v: ModalAction) => React.ReactElement) | React.ReactElement<{
        modalAction?: ModalAction;
    }>;
}
declare const ForwardRefButtonModal: React.ForwardRefExoticComponent<ButtonModalProps & React.RefAttributes<unknown>>;
export default ForwardRefButtonModal;
