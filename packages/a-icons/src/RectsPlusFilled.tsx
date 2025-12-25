import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RectsPlusFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 4a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4zM2.008 15.001a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5zM15 2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2h-5zM22 16.501h-3.492v-3.5h-2v3.5H13v2h3.508v3.5h2v-3.5H22v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RectsPlusFilled.displayName = 'RectsPlusFilled';
export default RectsPlusFilled;
