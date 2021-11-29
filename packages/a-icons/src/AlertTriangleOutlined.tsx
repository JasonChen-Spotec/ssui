import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function AlertTriangleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.19 5.08A3.94 3.94 0 0111.67 3a4 4 0 013.55 2.1l5.64 10.44a4 4 0 01-3.52 5.9H6a4 4 0 01-3.51-5.92l5.7-10.44zm5.68.73A2.48 2.48 0 009.5 5.8L3.81 16.22A2.49 2.49 0 006 19.91h11.34a2.51 2.51 0 002.2-3.69L13.87 5.81z"
        fill="currentColor"
      />
      <path
        d="M11.67 15a.75.75 0 000 1.5.74.74 0 00.75-.75.74.74 0 00-.75-.74V15zM11.67 13.63a.76.76 0 01-.75-.75v-3.1a.75.75 0 011.5 0v3.1a.75.75 0 01-.75.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AlertTriangleOutlined.displayName = 'AlertTriangleOutlined';
export default AlertTriangleOutlined;
