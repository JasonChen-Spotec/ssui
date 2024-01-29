import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GiftBoxOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={3}
        y={7.5}
        width={18}
        height={5}
        rx={1}
        stroke="currentColor"
        strokeWidth={2}
      />
      <rect
        x={5}
        y={12.5}
        width={14}
        height={8}
        rx={1}
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M12 6a2.5 2.5 0 012.5-2.5h.5a2 2 0 012 2v0a2 2 0 01-2 2h-2.985A.015.015 0 0112 7.485V6zM12 6a2.5 2.5 0 00-2.5-2.5H9a2 2 0 00-2 2v0a2 2 0 002 2h2.985A.015.015 0 0012 7.485V6zM12 7.5V21"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GiftBoxOutlined.displayName = 'GiftBoxOutlined';
export default GiftBoxOutlined;
