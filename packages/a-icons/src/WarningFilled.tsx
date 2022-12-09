import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function WarningFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.5 11a6.5 6.5 0 0113 0v8.5h-13V11z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 8.5l-2 4.19h4l-2 3.81"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 19.5h17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WarningFilled.displayName = 'WarningFilled';
export default WarningFilled;
