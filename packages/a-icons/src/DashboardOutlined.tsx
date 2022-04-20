import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DashboardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.4a1.4 1.4 0 01-1.4-1.4V5.55a6.6 6.6 0 107.85 7.85H12zm-.997-9.338c.548-.068.997.386.997.938v7h7c.552 0 1.006.45.938.997a8 8 0 11-8.935-8.935z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.19 7.436c.337.813.51 1.684.51 2.564a.7.7 0 01-.7.7h-6a.7.7 0 01-.7-.7V4a.7.7 0 01.7-.7 6.7 6.7 0 016.19 4.136zM19.253 9.3A5.3 5.3 0 0014.7 4.746V9.3h4.553z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DashboardOutlined.displayName = 'DashboardOutlined';
export default DashboardOutlined;
