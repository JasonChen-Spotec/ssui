import React from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
export type DrawerAction = {
    close: () => void;
    open: () => void;
};
export interface ButtonDrawerProps extends Omit<DrawerProps, 'children'> {
    onClose?: () => void;
    onOpen?: () => void;
    trigger: React.ReactElement;
    children: ((v: DrawerAction) => React.ReactElement) | React.ReactElement;
}
declare const ForwardRefButtonDrawer: React.ForwardRefExoticComponent<ButtonDrawerProps & React.RefAttributes<unknown>>;
export default ForwardRefButtonDrawer;
