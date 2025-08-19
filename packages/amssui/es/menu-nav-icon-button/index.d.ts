import React from 'react';
export type MenuNavIconProps = {
  onChange?: (status: boolean) => void;
  onClick?: () => void;
  status?: boolean;
  className?: string;
};
declare const MenuNavIconButton: React.FC<MenuNavIconProps>;
export default MenuNavIconButton;
