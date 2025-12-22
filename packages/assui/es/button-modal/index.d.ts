import * as React from 'react';
import type { ModalProps } from 'antd/lib/modal';
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
export interface BaseButtonModalProps extends Omit<ModalProps, 'children'> {
    trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
    children: ((v: ModalAction) => React.ReactElement) | React.ReactElement;
}
export type ButtonModalProps = (BaseButtonModalProps & ControlledProps) | (BaseButtonModalProps & UncontrolledProps);
declare const ButtonModal: (props: ButtonModalProps) => JSX.Element;
export default ButtonModal;
