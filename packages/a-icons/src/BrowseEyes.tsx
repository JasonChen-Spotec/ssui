import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BrowseEyes(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={0.556}
        y={0.556}
        width={18.889}
        height={18.889}
        rx={9.444}
        fill="#47A92A"
      />
      <rect
        x={0.556}
        y={0.556}
        width={18.889}
        height={18.889}
        rx={9.444}
        stroke="#fff"
        strokeWidth={1.111}
      />
      <path d="M8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#fff" />
      <path
        d="M10 5.5a6.253 6.253 0 00-5.955 4.348L3.996 10l.049.152a6.253 6.253 0 0011.91 0l.048-.152-.048-.152A6.253 6.253 0 0010 5.5zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BrowseEyes.displayName = 'BrowseEyes';
export default BrowseEyes;
