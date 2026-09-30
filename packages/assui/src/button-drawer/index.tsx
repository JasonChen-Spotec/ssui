import React, { useImperativeHandle, useRef } from 'react';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';

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

const ButtonDrawer: React.ForwardRefRenderFunction<unknown, ButtonDrawerProps> = (
  props,
  ref,
) => {
  const [drawerVisible, setDrawerVisible] = useControllableValue(props, {
    valuePropName: 'open',
    defaultValue: false,
  });
  const {
    children,
    onOpen,
    onClose,
    trigger,
    title,
    className,
    rootClassName,
    style,
    rootStyle,
    mask,
    maskClosable = false,
    destroyOnClose,
    destroyOnHidden = destroyOnClose,
    ...restProps
  } = props;
  const mergedMask =
    mask === false
      ? false
      : {
          ...(mask === true ? { enabled: true } : mask),
          closable:
            typeof mask === 'object' ? (mask.closable ?? maskClosable) : maskClosable,
        };

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
    triggerNode = trigger(openDrawer);
  } else {
    triggerNode =
      trigger &&
      React.cloneElement(trigger as React.ReactElement<{ onClick: () => void }>, {
        onClick: openDrawer,
      });
  }

  return (
    <>
      {triggerNode}
      <Drawer
        mask={mergedMask}
        destroyOnHidden={destroyOnHidden}
        rootClassName={classNames('button-drawer', className, rootClassName)}
        rootStyle={{ ...style, ...rootStyle }}
        title={title}
        onClose={closeDrawer}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
        {...restProps}
      >
        {isFunction(children)
          ? children(actionRef.current)
          : React.cloneElement(
              children as React.ReactElement<{ drawerAction: DrawerAction }>,
              { drawerAction: actionRef.current },
            )}
      </Drawer>
    </>
  );
};

const ForwardRefButtonDrawer = React.forwardRef<unknown, ButtonDrawerProps>(ButtonDrawer);

export default ForwardRefButtonDrawer;
