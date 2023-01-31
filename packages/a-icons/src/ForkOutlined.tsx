import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ForkOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.333 13.833a1.833 1.833 0 100-3.666 1.833 1.833 0 000 3.666zM19.333 6.5a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667zM19.333 21.167a1.833 1.833 0 100-3.667 1.833 1.833 0 000 3.667zM4.667 13.833a1.833 1.833 0 100-3.666 1.833 1.833 0 000 3.666zM6.5 12h11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 4.667h-3.667c-1.833 0-2.75.916-2.75 2.75v9.166c0 1.834.917 2.75 2.75 2.75H17.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ForkOutlined.displayName = 'ForkOutlined';
export default ForkOutlined;
