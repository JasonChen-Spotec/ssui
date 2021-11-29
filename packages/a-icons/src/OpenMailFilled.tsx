import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function OpenMailFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.29 2.525l6.85 4.81a4 4 0 011.7 3.28v7.13a4.27 4.27 0 01-4.28 4.26H6.28A4.27 4.27 0 012 17.745v-7.13a4 4 0 011.7-3.28l6.85-4.81c.78-.7 1.96-.7 2.74 0zm.09 13.48l5.47-3.81-.04.05a.75.75 0 10-.86-1.23l-5.54 3.87a.83.83 0 01-1.22-.05l-5.38-3.82a.74.74 0 00-1 .18.75.75 0 00.18 1l5.3 3.76a2.4 2.4 0 001.6.63 2.17 2.17 0 001.49-.58z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OpenMailFilled.displayName = 'OpenMailFilled';
export default OpenMailFilled;
