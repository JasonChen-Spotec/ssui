import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function StopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2A10 10 0 112 12zm5.72 5.11l9.39-9.39a.59.59 0 00-.83-.83l-9.39 9.39a.59.59 0 000 .83.63.63 0 00.42.17.58.58 0 00.41-.17z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StopFilled.displayName = 'StopFilled';
export default StopFilled;
