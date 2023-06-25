import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OctagonPromptFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1 6.47l-3.3-3.3A4 4 0 0013.97 2H9.3a4 4 0 00-2.83 1.17l-3.3 3.3A4 4 0 002 9.3v4.67a4 4 0 001.17 2.82l3.3 3.31a4 4 0 002.83 1.17h4.67a4 4 0 002.83-1.17l3.3-3.31a4 4 0 001.17-2.82V9.3a4 4 0 00-1.17-2.83zm-9.22 1.8a.75.75 0 011.5 0v3.1a.75.75 0 01-1.5 0v-3.1zm.76 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OctagonPromptFilled.displayName = 'OctagonPromptFilled';
export default OctagonPromptFilled;
