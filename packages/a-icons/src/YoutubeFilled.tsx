import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function YoutubeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={40} height={40} rx={20} fill="currentColor" />
      <path
        d="M31.5 13.823a3.01 3.01 0 00-2.123-2.123c-1.87-.5-9.377-.5-9.377-.5s-7.502 0-9.377.5A3.01 3.01 0 008.5 13.823C8 15.694 8 19.6 8 19.6s0 3.906.5 5.777a3.01 3.01 0 002.123 2.123C12.498 28 20 28 20 28s7.506 0 9.377-.5a3.01 3.01 0 002.123-2.123c.5-1.87.5-5.777.5-5.777s0-3.906-.5-5.777z"
        fill="inherit"
      />
      <path d="M17.602 23.2l6.235-3.6-6.235-3.6v7.2z" fill="inherit" />
      <path d="M17.602 23.201l6.234-3.6L17.602 16v7.201z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

YoutubeFilled.displayName = 'YoutubeFilled';
export default YoutubeFilled;
