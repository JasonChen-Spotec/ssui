import React from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
export type DrawerAction = {
    close: () => void;
    open: () => void;
};
export interface ButtonDrawerProps extends Omit<DrawerProps, 'children'> {
    onClose?: () => void;
    onOpen?: () => void;
    trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
    children: ((v: DrawerAction) => React.ReactElement) | React.ReactElement;
}
declare const ForwardRefButtonDrawer: React.ForwardRefExoticComponent<ButtonDrawerProps & React.RefAttributes<DrawerAction>>;
/**
 * @deprecated 请改用受控方式（open / onOpen / onClose），不再推荐使用 ref
 */
export default ForwardRefButtonDrawer;
