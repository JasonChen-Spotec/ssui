import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SignalOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.542 17.31a1.33 1.33 0 00-2.06 1v.06a1.33 1.33 0 002.65 0v-.06a1.33 1.33 0 00-.59-1zM6.792 14.4a.73.73 0 00-.16 1 .74.74 0 001 .16 6.9 6.9 0 018.21 0 .68.68 0 00.45.15.74.74 0 00.5-1.27 8.4 8.4 0 00-10-.04zM22.252 7.61A17.28 17.28 0 0011.792 4a17.23 17.23 0 00-10.46 3.59.75.75 0 10.92 1.18 15.7 15.7 0 019.54-3.27 15.69 15.69 0 019.56 3.3.74.74 0 001.05-.13.75.75 0 00-.15-1.06z"
        fill="currentColor"
      />
      <path
        d="M11.792 8.37a12.65 12.65 0 00-7.74 2.65.75.75 0 00-.14 1.05.77.77 0 00.6.3.8.8 0 00.48-.13 11.13 11.13 0 0113.64 0 .75.75 0 00.91-1.19 12.61 12.61 0 00-7.75-2.68z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalOutlined.displayName = 'SignalOutlined';
export default SignalOutlined;
