import React, { useRef, useImperativeHandle } from 'react';
import type { DrawerProps } from 'antd/lib/drawer';
import Drawer from 'antd/lib/drawer';
import isFunction from 'lodash/isFunction';
import classNames from 'classnames';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';

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

const ButtonDrawer: React.ForwardRefRenderFunction<DrawerAction, ButtonDrawerProps> = (
  props,
  ref,
) => {
  const [drawerVisible, setDrawerVisible] = useControllableValue(props, {
    valuePropName: 'open',
    defaultValue: false,
  });
  const { children, onOpen, onClose, trigger, title, className, ...restProps } = props;

  const closeDrawer = () => {
    setDrawerVisible(false);
    onClose?.();
  };

  const openDrawer = () => {
    setDrawerVisible(true);
    onOpen?.();
  };

  const actionRef = useRef<DrawerAction>({
    open: openDrawer,
    close: closeDrawer,
  });

  useImperativeHandle(ref, () => actionRef.current);


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

const ForwardRefButtonDrawer = React.forwardRef<unknown, ButtonDrawerProps>(ButtonDrawer);

export default ForwardRefButtonDrawer;
