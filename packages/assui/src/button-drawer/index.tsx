import React, { useRef, useImperativeHandle, useEffect } from 'react';
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
  /** 防止滚动穿透(解决移动端滚动穿透问题) */
  preventRollingPenetration?: boolean;
}

const ButtonDrawer: React.ForwardRefRenderFunction<DrawerAction, ButtonDrawerProps> = (
  props,
  ref,
) => {
  const [drawerVisible, setDrawerVisible] = useControllableValue(props, {
    valuePropName: 'open',
    defaultValue: false,
  });
  // eslint-disable-next-line max-len
  const { children, onOpen, onClose, trigger, title, className,preventRollingPenetration=false, ...restProps } = props;

  const closeDrawer = () => {
    setDrawerVisible(false);
    onClose?.();
  };

  const openDrawer = () => {
    setDrawerVisible(true);
    onOpen?.();
  };

  useEffect(() => {
    if(preventRollingPenetration) {
      if(drawerVisible) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    return () => {if(preventRollingPenetration) document.body.style.overflow = ''}
  }, [drawerVisible, preventRollingPenetration])

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
