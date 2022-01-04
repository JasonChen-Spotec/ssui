import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ShopkeeperOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.5a2.5 2.5 0 01-5 0V6.1c0-1.16.94-2.1 2.1-2.1h.8c1.16 0 2.1.94 2.1 2.1v1.4zm-2.9-2a.6.6 0 00-.6.6v1.4a1 1 0 102 0V6.1a.6.6 0 00-.6-.6h-.8z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12.47l.08.53A2 2 0 0122 15v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 01.88-1.67 2 2 0 01-.18-.64l-.19-1.92a2 2 0 012.72-2.05l1.3.5a2.78 2.78 0 011.38 1.15l.67 1.08A2 2 0 018.81 13h1.82l.11-.53a2.73 2.73 0 012.63-2.22h4A2.73 2.73 0 0120 12.47zm-6.58-.71a1.23 1.23 0 00-1.16 1l-.05.27h6.36v-.27a1.19 1.19 0 00-1.15-1h-4zm-9.27-1.51a.49.49 0 01.36-.17.391.391 0 01.18 0l1.3.5c.269.1.497.287.65.53l.66 1.09a.45.45 0 010 .49.46.46 0 01-.42.25H4.71a.5.5 0 01-.49-.44L4 10.62a.49.49 0 01.15-.37zM20 18.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h16z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShopkeeperOutlined.displayName = 'ShopkeeperOutlined';
export default ShopkeeperOutlined;
