import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BoardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={3.5}
        y={9}
        width={17}
        height={12}
        rx={1}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M3.5 9.5l7.347-5.186a2 2 0 012.306 0L16.25 6.5l4.25 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M7 13h10M8 17h8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BoardOutlined.displayName = 'BoardOutlined';
export default BoardOutlined;
