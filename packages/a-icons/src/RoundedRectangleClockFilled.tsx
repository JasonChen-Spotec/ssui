import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RoundedRectangleClockFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2h4.24a8 8 0 018 8v4.24a8 8 0 01-8 8H10a8 8 0 01-8-8V10a8 8 0 018-8zm2.12 16.12a1 1 0 001-1v-5a1 1 0 00-.29-.71l-4-4a1.004 1.004 0 00-1.42 1.42l3.71 3.7v4.59a1 1 0 001 1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RoundedRectangleClockFilled.displayName = 'RoundedRectangleClockFilled';
export default RoundedRectangleClockFilled;
