import { useControllableValue } from 'ahooks';
import classNames from 'classnames';
import React from 'react';

export type MenuNavIconProps = {
  onChange?: (status: boolean) => void;
  onClick?: () => void;
  status?: boolean;
};

const MenuNavIconButton: React.FC<MenuNavIconProps> = (props) => {
  const { onClick } = props;
  const [status, setStatus] = useControllableValue(props, { valuePropName: 'status' });

  return (
    <div
      className={classNames('menu-nav-icon', { open: status })}
      onClick={() => {
        const nextStatus = !status;
        setStatus(nextStatus);
        onClick?.();
      }}
    >
      <div className="menu-nav-icon-wrap">
        <span className="menu-nav-icon-bar"></span>
        <span className="menu-nav-icon-bar"></span>
        <span className="menu-nav-icon-bar"></span>
      </div>
    </div>
  );
};

export default MenuNavIconButton;
