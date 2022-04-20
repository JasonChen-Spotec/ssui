import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShopKeeperFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.91 13.42l.16-.76a2.19 2.19 0 012.12-1.81h4.41a2.19 2.19 0 012.12 1.81l.16 1.06M15.5 10A2.5 2.5 0 0113 7.5V6.1c0-1.16.94-2.1 2.1-2.1h.8c1.16 0 2.1.94 2.1 2.1v1.4a2.5 2.5 0 01-2.5 2.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 13h16a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2zm1 4.25h14a.75.75 0 000-1.5H5a.75.75 0 000 1.5z"
        fill="currentColor"
      />
      <path
        d="M6.53 9.3l-1.3-.56A2 2 0 002.54 11l.19 2.16a2.1 2.1 0 002 2h2.16a2.25 2.25 0 001.69-3.41l-.67-1.22A2.92 2.92 0 006.53 9.3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShopKeeperFilled.displayName = 'ShopKeeperFilled';
export default ShopKeeperFilled;
