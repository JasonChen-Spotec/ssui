import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LineChartUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={4}
        y={6}
        width={13}
        height={16}
        rx={2}
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M9 5.75V4a2 2 0 012-2h8a2 2 0 012 2v11a2 2 0 01-2 2h-2"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path d="M4 16l4.952-3 3.096 3L17 13" stroke="currentColor" strokeWidth={2} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LineChartUpOutlined.displayName = 'LineChartUpOutlined';
export default LineChartUpOutlined;
