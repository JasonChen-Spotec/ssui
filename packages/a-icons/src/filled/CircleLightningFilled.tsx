import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function CircleLightningFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path fill="currentColor" d="M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z" />
      <path
        fill="currentColor"
        d="M10.64 3.14H7.27a.76.76 0 00-.7.45L4.26 8.66h2.51l-1.51 4.52 6.9-6.53H9.28L11 3.71a.37.37 0 00-.36-.57z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleLightningFilled.displayName = 'CircleLightningFilled';
export default CircleLightningFilled;
