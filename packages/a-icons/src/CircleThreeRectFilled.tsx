import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CircleThreeRectFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM7.4 13.1H5.2v-2.2h2.2v2.2zm3.5 0h2.2v-2.2h-2.2v2.2zm7.9 0h-2.2v-2.2h2.2v2.2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleThreeRectFilled.displayName = 'CircleThreeRectFilled';
export default CircleThreeRectFilled;
