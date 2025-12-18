import React, { useRef } from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
import Drawer from 'antd/lib/drawer';
import isFunction from 'lodash/isFunction';
import classNames from 'classnames';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import { useControllableValue } from 'ahooks';

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

export interface BaseButtonDrawerProps
  extends Omit<DrawerProps, 'children'> {
  trigger?: ((fun: () => void) => React.ReactElement) | React.ReactElement;
  children: ((v: DrawerAction) => React.ReactElement) | React.ReactElement;
}

export type ButtonDrawerProps =
  | (BaseButtonDrawerProps & ControlledProps)
  | (BaseButtonDrawerProps & UncontrolledProps);


const ButtonDrawer = (
  props: ButtonDrawerProps
) => {
  const { children, onOpen, onClose, trigger, title, className, ...restProps } = props;
  const [drawerVisible, setDrawerVisible] = useControllableValue(props, { valuePropName: 'open' });

  const closeDrawer = () => {
    onClose?.();
    setDrawerVisible(false);
  };

  const openDrawer = () => {
    onOpen?.();
    setDrawerVisible(true);
  };

  const actionRef = useRef<DrawerAction>({
    close() {
      closeDrawer();
    },
    open() {
      openDrawer();
    },
  });


  let triggerNode;
  if (isFunction(trigger)) {
    triggerNode = trigger(openDrawer)
  } else {
    triggerNode = trigger &&
      React.cloneElement(trigger, {
        onClick: openDrawer,
      });
  }

  return (
    <>
      {triggerNode}
      <Drawer
        maskClosable={false}
        className={classNames('button-drawer', className)}
        title={title}
        onClose={closeDrawer}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
        {...restProps}
      >
        {isFunction(children)
          ? children(actionRef.current)
          : React.cloneElement(children, { drawerAction: actionRef.current })}
      </Drawer>
    </>
  );
};


export default ButtonDrawer;
