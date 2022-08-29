import { useControllableValue } from 'ahooks';
import classNames from 'classnames';
import React from 'react';

export type MenuNavIconProps = {
  onChange?: (status: boolean) => void;
  onClick?: () => void;
  status?: boolean;
  className?: string;
};

const MenuNavIconButton: React.FC<MenuNavIconProps> = (props) => {
  const { onClick, className } = props;
  const [status, setStatus] = useControllableValue(props, { valuePropName: 'status' });

  return (
    <div
      className={classNames('menu-nav-icon', { open: status }, className)}
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
