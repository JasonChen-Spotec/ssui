import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function StopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM6.343 4.929L4.929 6.343l12.728 12.728 1.414-1.414L6.343 4.929z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StopFilled.displayName = 'StopFilled';
export default StopFilled;
