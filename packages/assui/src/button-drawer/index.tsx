import CloseOutlined from 'a-icons/lib/CloseOutlined';
import type { DrawerProps } from 'antd/lib/drawer';
import Drawer from 'antd/lib/drawer';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

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

const ButtonDrawer: React.ForwardRefRenderFunction<unknown, ButtonDrawerProps> = (
  props,
  ref,
) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { children, onOpen, onClose, trigger, title, className, ...restProps } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const actionRef = useRef<DrawerAction>({
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

  useEffect(() => {
    const drawerElement = modalRef.current;
    if (!drawerElement) return;

    if (drawerVisible) {
      // 保存滚动位置
      setScrollPosition(window?.pageYOffset || 0);
      disableBodyScroll(drawerElement);
    } else {
      enableBodyScroll(drawerElement);
      // 恢复滚动位置
      window?.scrollTo(0, scrollPosition);
    }

    return () => {
      enableBodyScroll(drawerElement);
      clearAllBodyScrollLocks();
    };
  }, [drawerVisible]);

  return (
    <>
      {buttonNode}
      <Drawer
        maskClosable={false}
        className={classNames('button-drawer', className)}
        title={title}
        onClose={closeDrawer}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
        destroyOnClose
        {...restProps}
      >
        <div
          ref={modalRef}
          style={{
            height: '100%',
            overflowY: 'scroll',
          }}
        >
          {isFunction(children)
            ? children(actionRef.current)
            : React.cloneElement(children, { drawerAction: actionRef.current })}
        </div>
      </Drawer>
    </>
  );
};

const ForwardRefButtonDrawer = React.forwardRef<unknown, ButtonDrawerProps>(ButtonDrawer);

export default ForwardRefButtonDrawer;
