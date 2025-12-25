import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 9a3.988 3.988 0 01-2.842-1.185L9.85 10.912a4.003 4.003 0 010 2.175l5.311 3.095a4 4 0 11-1.01 1.726l-5.309-3.094a4 4 0 110-5.63L14.15 6.09A4.003 4.003 0 0118 1a4 4 0 010 8z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShareFilled.displayName = 'ShareFilled';
export default ShareFilled;
