import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CircleStopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 10-18 0 9 9 0 0018 0zM10 9a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CircleStopFilled.displayName = 'CircleStopFilled';
export default CircleStopFilled;
