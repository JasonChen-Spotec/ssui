import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AlertTriangleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.526 19.5L12 3 2.474 19.5h19.052zM13.732 2c-.77-1.333-2.694-1.333-3.464 0L.742 18.5c-.77 1.333.192 3 1.732 3h19.052c1.54 0 2.502-1.667 1.732-3L13.732 2z"
        fill="currentColor"
      />
      <path d="M13 14h-2V8h2v6zM13.01 16v2H11v-2h2.01z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AlertTriangleOutlined.displayName = 'AlertTriangleOutlined';
export default AlertTriangleOutlined;
