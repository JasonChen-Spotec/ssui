import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DashboardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.003 4.062c.548-.068.997.386.997.938v6a1 1 0 001 1h6c.552 0 1.006.45.938.997a8 8 0 11-8.935-8.935z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7 10A6.7 6.7 0 0014 3.3a.7.7 0 00-.7.7v6a.7.7 0 00.7.7h6a.7.7 0 00.7-.7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DashboardFilled.displayName = 'DashboardFilled';
export default DashboardFilled;
