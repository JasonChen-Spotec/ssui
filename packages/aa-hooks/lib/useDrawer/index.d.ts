import type { DrawerProps } from 'antd/lib/drawer';
import type React from 'react';
export type DrawerAction = {
  close: () => void;
  open: () => void;
};
export type UseDrawerProps = Omit<DrawerProps, 'open' | 'children'> & {
  onBeforeOpen?: () => void;
  onBeforeClose?: () => void;
  renderChildren?: (v: DrawerAction) => React.ReactElement;
};
export type UseDrawerType = (props?: UseDrawerProps) => [DrawerProps, DrawerAction];
export declare const useDrawer: UseDrawerType;
export type generateUseDrawerType = (props: UseDrawerProps) => UseDrawerType;
export declare const generateUseDrawer: generateUseDrawerType;
