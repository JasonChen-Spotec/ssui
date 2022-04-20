import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ConfirmCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={3.7}
        y={3.7}
        width={16.6}
        height={16.6}
        rx={8.3}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path
        d="M7.995 12.152a.7.7 0 11.99-.99l2.687 2.687a.7.7 0 11-.99.99l-2.687-2.687z"
        fill="currentColor"
      />
      <path
        d="M15.49 9.323a.7.7 0 01.99.99l-4.667 4.667a.7.7 0 01-.99-.99l4.667-4.667z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ConfirmCircleOutlined.displayName = 'ConfirmCircleOutlined';
export default ConfirmCircleOutlined;
