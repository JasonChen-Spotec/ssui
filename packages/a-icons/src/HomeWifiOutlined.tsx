import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function HomeWifiOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={12}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.206 14.397a5.647 5.647 0 10-10.272.027M20.212 16.325a9.194 9.194 0 10-16.278.031"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15v7M14 22h-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeWifiOutlined.displayName = 'HomeWifiOutlined';
export default HomeWifiOutlined;
