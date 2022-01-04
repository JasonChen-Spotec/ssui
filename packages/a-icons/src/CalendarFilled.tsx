import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CalendarFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9 2.57h.1a5 5 0 015 5v9a5 5 0 01-5 5H5a5 5 0 01-5-5v-9a5 5 0 015-5h.1V.75a.75.75 0 011.5 0v1.82h6.8V.75a.75.75 0 011.5 0v1.82zM5.5 8.66h9a.75.75 0 000-1.5h-9a.75.75 0 000 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CalendarFilled.displayName = 'CalendarFilled';
export default CalendarFilled;
