import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function StampFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={4} y={13} width={16} height={5} rx={2} />
      <path d="M10 10h4v4h-4z" />
      <circle cx={12} cy={7} r={4} />
      <rect x={5} y={19} width={14} height={2} rx={1} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StampFilled.displayName = 'StampFilled';
export default StampFilled;
