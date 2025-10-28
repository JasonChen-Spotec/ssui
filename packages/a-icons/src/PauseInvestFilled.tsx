import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PauseInvestFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.125 7.9h1.5v-4.8h-1.5v4.8zm2.75 0h1.5v-4.8h-1.5v4.8z"
        fill="currentColor"
      />
      <path
        d="M1.048 14.948c.496.325 1.04.593 1.593.814 1.804.721 4.145 1.119 6.62 1.119.448 0 .892-.015 1.328-.04A7.56 7.56 0 0010.5 18a7.47 7.47 0 00.76 3.293c.045.136.092.27.144.403a20.05 20.05 0 01-2.142.114c-4.537 0-8.214-1.472-8.214-3.287v-3.575zM17.477 10.52a7.5 7.5 0 00-6.155 4.065 20.1 20.1 0 01-2.06.105c-4.537 0-8.214-1.471-8.214-3.286V7.83a9.05 9.05 0 001.593.814c1.804.721 4.145 1.119 6.62 1.119 2.476 0 4.819-.398 6.623-1.12a9.053 9.053 0 001.593-.813v2.69zM9.262 1c3.402 0 6.322.828 7.57 2.007.415.393.645.826.645 1.28C17.476 6.1 13.798 7.57 9.262 7.57s-8.214-1.47-8.214-3.285C1.048 2.472 4.725 1 9.262 1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PauseInvestFilled.displayName = 'PauseInvestFilled';
export default PauseInvestFilled;
