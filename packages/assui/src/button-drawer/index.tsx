import React, { useState, useRef, useImperativeHandle } from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
import Drawer from 'antd/lib/drawer';
import classNames from 'classnames';

export interface ButtonDrawerProps extends DrawerProps {
  onClose: () => void;
  onOpen: () => void;
  content: React.ReactElement;
  children: React.ReactElement;
}

const ButtonDrawer: React.ForwardRefRenderFunction<unknown, ButtonDrawerProps> = (props, ref) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { children, onOpen, onClose, content, title, className, ...restProps } = props;

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

  useImperativeHandle(ref, () => actionRef.current, [actionRef.current]);

  const buttonNode =
    children &&
    React.cloneElement(children, {
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
        {React.cloneElement(content, { drawerAction: actionRef.current })}
      </Drawer>
    </>
  );
};

const ForwardRefButtonDrawer = React.forwardRef<unknown, ButtonDrawerProps>(ButtonDrawer);

export default ForwardRefButtonDrawer;

// export default React.memo(ButtonDrawer);
