import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function WalletFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.314 11.22a.676.676 0 100 1.351H22V11.2h-.105l-3.58.02z" fill="currentColor" />
      <path
        d="M21.895 14.381h-3.58a2.486 2.486 0 010-4.971H22v-1.6A3.81 3.81 0 0018.19 4H5.81A3.81 3.81 0 002 7.81v8.171a3.81 3.81 0 003.81 3.81h12.38A3.81 3.81 0 0022 15.98v-1.62l-.105.02z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WalletFilled.displayName = 'WalletFilled';
export default WalletFilled;
