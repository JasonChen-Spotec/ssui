import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ClockCircleOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        fill="#fff"
        x={3.7}
        y={3.7}
        width={16.6}
        height={16.6}
        rx={8.3}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <rect fill="currentColor" x={11} y={7} width={1.4} height={6} rx={0.7} />
      <rect
        fill="currentColor"
        x={17}
        y={12}
        width={1.4}
        height={6}
        rx={0.7}
        transform="rotate(90 17 12)"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClockCircleOutline.displayName = 'ClockCircleOutline';
export default ClockCircleOutline;
