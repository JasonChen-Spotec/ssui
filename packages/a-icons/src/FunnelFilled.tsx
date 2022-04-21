import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FunnelFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.899 2h14.18a2.9 2.9 0 012.05 4.95l-4.77 4.77a3 3 0 00-.85 2.06v4.39a2.91 2.91 0 01-1.16 2.32l-1.24.94a2.9 2.9 0 01-4.64-2.33v-5.32a3 3 0 00-.85-2.06l-4.77-4.77A2.9 2.9 0 014.899 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FunnelFilled.displayName = 'FunnelFilled';
export default FunnelFilled;
