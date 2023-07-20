import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FundProjectionScreenFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM16.67 22.34c-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08L12 20.84l-3.67 1.83c-.1.05-.22.08-.33.08-.27 0-.54-.15-.67-.41a.74.74 0 01.34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01z"
        fill="currentColor"
      />
      <path
        d="M3 2v12.1C3 16 4 17 5.9 17h12.2c1.9 0 2.9-1 2.9-2.9V2H3zm13.98 6.58l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.12-.31.17-.48.17a.75.75 0 01-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44a.75.75 0 011.06.1c.26.32.22.79-.1 1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FundProjectionScreenFilled.displayName = 'FundProjectionScreenFilled';
export default FundProjectionScreenFilled;
