import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function IdCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a4 4 0 00-4 4v10a4 4 0 004 4h14a4 4 0 004-4V7a4 4 0 00-4-4H5zm11.68 9.204a2.5 2.5 0 10-2.36 0A3.501 3.501 0 0012 15.5v1h7v-1a3.501 3.501 0 00-2.32-3.296zM5 9h4.5v2H5V9zm0 4h4.5v2H5v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

IdCardFilled.displayName = 'IdCardFilled';
export default IdCardFilled;
