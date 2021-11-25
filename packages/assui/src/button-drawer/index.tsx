import React, { useState, useRef, useImperativeHandle } from 'react';
import type { DrawerProps } from 'antd/es/drawer';
import Drawer from 'antd/es/drawer';
import classNames from 'classnames';

export interface ButtonDrawerProps extends DrawerProps {
  onClose?: () => void;
  onOpen?: () => void;
  trigger: React.ReactElement;
  children: React.ReactElement;
}

const ButtonDrawer: React.ForwardRefRenderFunction<unknown, ButtonDrawerProps> = (props, ref) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { children, onOpen, onClose, trigger, title, className, ...restProps } = props;

  const closeDrawer = () => {
    if (onClose) {
      onClose();
    }

    setDrawerVisible(false);
  };

  const openDrawer = () => {
    if (onOpen) {
      onOpen();
    }
    setDrawerVisible(true);
  };

  const actionRef = useRef({
    close() {
      closeDrawer();
    },
    open() {
      openDrawer();
    },
  });

  useImperativeHandle(ref, () => actionRef.current);

  const buttonNode =
    trigger &&
    React.cloneElement(trigger, {
      onClick: openDrawer,
    });

  return (
    <>
      {buttonNode}
      <Drawer
        maskClosable={false}
        className={classNames('button-drawer', className)}
        title={title}
        onClose={closeDrawer}
        visible={drawerVisible}
        {...restProps}
      >
        {React.cloneElement(children, { drawerAction: actionRef.current })}
      </Drawer>
    </>
  );
};

const ForwardRefButtonDrawer = React.forwardRef<unknown, ButtonDrawerProps>(ButtonDrawer);

export default ForwardRefButtonDrawer;
