import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function WalletOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.19 5.639c1.239 0 2.191.963 2.191 2.216v8.29c0 1.253-.952 2.216-2.19 2.216H5.81c-1.239 0-2.19-.963-2.19-2.216v-8.29C3.618 6.602 4.57 5.64 5.81 5.64h12.38zm0-1.639H5.81C3.714 4 2 5.735 2 7.855v8.29C2 18.265 3.714 20 5.81 20h12.38c2.096 0 3.81-1.735 3.81-3.855v-8.29C22 5.735 20.286 4 18.19 4z"
        fill="currentColor"
      />
      <path
        d="M20.952 10.361h-2.666c-.857 0-1.62.675-1.62 1.639 0 .867.667 1.639 1.62 1.639h2.666"
        stroke="currentColor"
        strokeWidth={1.903}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WalletOutlined.displayName = 'WalletOutlined';
export default WalletOutlined;
