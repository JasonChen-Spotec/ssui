import type React from 'react';
import { useRef, useState } from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
import classNames from 'classnames';

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

export const useDrawer: UseDrawerType = (props) => {
  const [open, setOpen] = useState(false);
  const { onBeforeOpen, onBeforeClose, renderChildren, ...restProps } = props ?? {};

  const closeDrawer = () => {
    if (onBeforeClose) {
      onBeforeClose();
    }

    setOpen(false);
  };

  const openDrawer = () => {
    if (onBeforeOpen) {
      onBeforeOpen();
    }
    setOpen(true);
  };

  const actionRef = useRef<DrawerAction>({
    close() {
      closeDrawer();
    },
    open() {
      openDrawer();
    },
  });
  const drawerProps: DrawerProps = {
    open,
    onClose: closeDrawer,
    ...restProps,
  };
  if (renderChildren) {
    drawerProps.children = renderChildren(actionRef.current);
  }
  return [drawerProps, actionRef.current];
};

export type generateUseDrawerType = (props: UseDrawerProps) => UseDrawerType;

export const generateUseDrawer: generateUseDrawerType = (defaultProps) =>
  function useDrawerFunc(newProps?: UseDrawerProps) {
    const props = {
      ...defaultProps,
      ...newProps,
      className: classNames(defaultProps.className, newProps?.className),
    };
    return useDrawer(props);
  };
