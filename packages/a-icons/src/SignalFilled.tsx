import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SignalFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.24 2H10a8 8 0 00-8 8v4.24a8 8 0 008 8h4.24a8 8 0 008-8V10a8 8 0 00-8-8zm-.74 14.36a1.38 1.38 0 11-2.75 0 1.39 1.39 0 011.37-1.37 1.39 1.39 0 011.37 1.32l.01.05zM14.97 15a.73.73 0 00.6-.3.74.74 0 00-.15-1.06 5.57 5.57 0 00-6.61 0 .754.754 0 00.9 1.21 4 4 0 014.81 0 .78.78 0 00.45.15zm2.32-2.45a.75.75 0 01-1.05.14 6.69 6.69 0 00-4.1-1.4 6.82 6.82 0 00-4.12 1.41.76.76 0 01-1.05-.14.75.75 0 01.14-1 8.34 8.34 0 015-1.72 8.2 8.2 0 015 1.71.74.74 0 01.18 1zm1.1-1.84a.73.73 0 00.6-.29.75.75 0 00-.09-1.05 11 11 0 00-13.46 0 .76.76 0 00-.14 1.06.75.75 0 001 .13 9.47 9.47 0 0111.64 0 .74.74 0 00.45.15z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalFilled.displayName = 'SignalFilled';
export default SignalFilled;
