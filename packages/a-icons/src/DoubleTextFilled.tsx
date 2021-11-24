import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function DoubleTextFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.29 2H11a4 4 0 00-3.93 3.36 3.88 3.88 0 00-3.36 3.82v8.17A4.64 4.64 0 008.36 22h5a3.9 3.9 0 003.84-3.21 4 4 0 003.13-3.9V6a4 4 0 00-4.04-4zm-6.11 4.88h5.39a.75.75 0 010 1.5h-5.39a.75.75 0 110-1.5zM8.32 20.67h5a2.6 2.6 0 002.48-1.81H11a4 4 0 01-4-4V6.68a2.58 2.58 0 00-2 2.5v8.17a3.34 3.34 0 003.32 3.32zm1.11-6.6a.75.75 0 01.75-.75H14a.75.75 0 010 1.5h-3.82a.75.75 0 01-.75-.75zm.75-2.47h6.93a.75.75 0 000-1.5h-6.93a.75.75 0 100 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleTextFilled.displayName = 'DoubleTextFilled';
export default DoubleTextFilled;
