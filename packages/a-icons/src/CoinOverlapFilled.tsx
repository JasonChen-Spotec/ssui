import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CoinOverlapFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#coin-overlap-filled_svg__clip0_2038_3184)" fill="currentColor">
        <path d="M2.4 6.764c0 2.444 4.276 4.364 9.6 4.364s9.6-2.008 9.6-4.364C21.6 4.32 17.324 2.4 12 2.4S2.4 4.408 2.4 6.764z" />
        <path d="M12 13.134c-4.102 0-7.505-1.134-8.99-2.792-.435.61-.61 1.047-.61 1.57 0 2.357 4.276 4.364 9.6 4.364s9.6-1.92 9.6-4.363c0-.611-.262-1.048-.61-1.571-1.484 1.57-4.888 2.792-8.99 2.792z" />
        <path d="M3.01 15.578c-.435.437-.61 1.047-.61 1.571 0 2.356 4.276 4.364 9.6 4.364s9.6-1.92 9.6-4.364c0-.61-.262-1.047-.61-1.57-1.484 1.57-4.888 2.792-8.99 2.792-4.19 0-7.505-1.135-8.99-2.793z" />
      </g>
      <defs>
        <clipPath id="coin-overlap-filled_svg__clip0_2038_3184">
          <path fill="#fff" transform="translate(2.4 2.4)" d="M0 0h19.2v19.2H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CoinOverlapFilled.displayName = 'CoinOverlapFilled';
export default CoinOverlapFilled;
