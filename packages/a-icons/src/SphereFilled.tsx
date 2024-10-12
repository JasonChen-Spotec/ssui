import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SphereFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.045 9.985a9.62 9.62 0 00-11.2 9.46 8.43 8.43 0 00.14 1.6 9.59 9.59 0 1111.06-11.06z"
        fill="currentColor"
      />
      <path
        d="M21.175 12.585a8.45 8.45 0 01-8.46 8.46 7.325 7.325 0 01-1.41-.12 7.316 7.316 0 01-.13-1.4 8.47 8.47 0 018.46-8.47c.476-.003.952.04 1.42.13.08.462.12.93.12 1.4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SphereFilled.displayName = 'SphereFilled';
export default SphereFilled;
