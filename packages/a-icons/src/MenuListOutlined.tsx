import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function MenuListOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 17H3a1 1 0 000 2h10a1 1 0 000-2zM3 7h18a1 1 0 100-2H3a1 1 0 000 2zm18 4H3a1 1 0 000 2h18a1 1 0 000-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MenuListOutlined.displayName = 'MenuListOutlined';
export default MenuListOutlined;
