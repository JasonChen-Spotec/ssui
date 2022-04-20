import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.4 2.275h13a2.6 2.6 0 012.6 2.6v2.167a2.6 2.6 0 01-2.6 2.6V8.125c.598 0 1.083-.485 1.083-1.083V4.875c0-.598-.485-1.083-1.083-1.083h-13c-.598 0-1.083.485-1.083 1.083v2.167c0 .598.485 1.083 1.083 1.083v1.517a2.6 2.6 0 01-2.6-2.6V4.875a2.6 2.6 0 012.6-2.6z"
        fill="currentColor"
      />
      <rect
        fill="#fff"
        x={5.783}
        y={6.258}
        width={12.233}
        height={16.567}
        rx={1.7}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path d="M8.65 6.958v15.167" stroke="currentColor" strokeWidth={1.4} />
      <mask id="card-outlined_svg__a" fill="#fff">
        <rect x={11.9} y={15.625} width={4.333} height={5.417} rx={1} />
      </mask>
      <rect
        fill="#fff"
        x={11.9}
        y={15.625}
        width={4.333}
        height={5.417}
        rx={1}
        stroke="currentColor"
        strokeWidth={2.8}
        mask="url(#card-outlined_svg__a)"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardOutlined.displayName = 'CardOutlined';
export default CardOutlined;
