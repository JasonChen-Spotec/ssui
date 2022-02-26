import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function AuctionFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354-2.477 2.473 5.657 5.658-1.414 1.413L16 13.415l-2.404 2.404.283 1.132-1.415 1.413-7.778-7.777 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AuctionFilled.displayName = 'AuctionFilled';
export default AuctionFilled;
