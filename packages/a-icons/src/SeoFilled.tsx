import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SeoFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10 8.5a5.5 5.5 0 1110.032 3.117l2.675 2.676-1.414 1.414-2.675-2.675A5.5 5.5 0 0110 8.5zM3 4h5v2H3V4zm0 7h5v2H3v-2zm18 7v2H3v-2h18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SeoFilled.displayName = 'SeoFilled';
export default SeoFilled;
