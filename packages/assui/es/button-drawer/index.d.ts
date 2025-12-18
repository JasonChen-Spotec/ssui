import React from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
export type DrawerAction = {
    close: () => void;
    open: () => void;
};
type ControlledProps = {
    open: boolean;
    onOpen?: () => void;
    onClose: () => void;
};
type UncontrolledProps = {
    onOpen?: () => void;
    onClose?: () => void;
};
export interface BaseButtonDrawerProps extends Omit<DrawerProps, 'children'> {
    trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
    children: ((v: DrawerAction) => React.ReactElement) | React.ReactElement;
}
export type ButtonDrawerProps = (BaseButtonDrawerProps & ControlledProps) | (BaseButtonDrawerProps & UncontrolledProps);
declare const ButtonDrawer: (props: ButtonDrawerProps) => JSX.Element;
export default ButtonDrawer;
