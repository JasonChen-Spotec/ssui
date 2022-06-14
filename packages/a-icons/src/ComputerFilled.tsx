import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ComputerFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.16 15.32a1.64 1.64 0 00-2.32 0l-2.31 2.31a1.64 1.64 0 001.16 2.8h4.62a1.64 1.64 0 001.16-2.8l-2.31-2.31z"
        fill="currentColor"
      />
      <path
        d="M19 4.32H5a2.17 2.17 0 00-2 2.3v6.9a2.17 2.17 0 002 2.3h.55a5.9 5.9 0 004.18-1.73l.81-.8a2.06 2.06 0 012.92 0l.81.8a5.9 5.9 0 004.18 1.73H19a2.17 2.17 0 002-2.3v-6.9a2.17 2.17 0 00-2-2.3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ComputerFilled.displayName = 'ComputerFilled';
export default ComputerFilled;
