import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ClockOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.65 7.59a.75.75 0 00-1.06 1.06l3.78 3.78v4.69a.75.75 0 001.5 0v-5a.75.75 0 00-.22-.53l-4-4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2h4.24a8 8 0 018 8v4.24a8 8 0 01-8 8H10a8 8 0 01-8-8V10a8 8 0 018-8zm4.24 18.74a6.51 6.51 0 006.5-6.5V10a6.51 6.51 0 00-6.5-6.5H10A6.51 6.51 0 003.5 10v4.24a6.51 6.51 0 006.5 6.5h4.24z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClockOutline.displayName = 'ClockOutline';
export default ClockOutline;
