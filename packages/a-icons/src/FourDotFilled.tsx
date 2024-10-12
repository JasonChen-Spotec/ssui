import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FourDotFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM21 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM11 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM21 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FourDotFilled.displayName = 'FourDotFilled';
export default FourDotFilled;
