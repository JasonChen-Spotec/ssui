import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShareFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.238 15.594a2.53 2.53 0 00-2.46-.12l-3-3a2.52 2.52 0 00.14-1.61 2 2 0 00-.08-.22l2.94-2.94a2.48 2.48 0 10-1.06-1l-2.77 2.73a2.5 2.5 0 10-.83 4.46c.234-.068.456-.17.66-.3l3 3a2.49 2.49 0 103.5-1h-.04z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShareFilled.displayName = 'ShareFilled';
export default ShareFilled;
