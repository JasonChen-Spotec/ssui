import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ChevronUpFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        fill="currentColor"
        width={19.12}
        height={19.12}
        rx={2}
        transform="matrix(0 -1 -1 0 21.52 21.6)"
      />
      <path
        d="M7.19 8.9a.75.75 0 00-.53.22.74.74 0 000 1.06l4.77 4.78a.75.75 0 001.06 0l4.77-4.78a.74.74 0 000-1.06.75.75 0 00-1.06 0l-4.24 4.25-4.24-4.25a.79.79 0 00-.53-.22z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ChevronUpFilled.displayName = 'ChevronUpFilled';
export default ChevronUpFilled;
