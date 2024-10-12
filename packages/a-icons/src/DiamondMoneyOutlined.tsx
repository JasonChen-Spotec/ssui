import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DiamondMoneyOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.58 7.746l2.364 2.836 2.363-2.836M6.104 13.418h5.672M6.104 10.582h5.672M8.94 10.582v5.672"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.77 15.32l-1.52 1.95a.796.796 0 00.136 1.11c.14.102.309.157.482.158.242 0 .47-.112.618-.304l1.53-1.95a.788.788 0 00-1.247-.964z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.814 14.178l.692 3.364c.21.68-.045 1.417-.63 1.823l-3.258 2.369c-.59.42-1.38.42-1.97 0l-3.259-2.369a1.656 1.656 0 01-.629-1.907l.67-3.28a2.096 2.096 0 012.097-1.708h4.191a2.148 2.148 0 012.096 1.708zm-4.118 6.235l3.259-2.347a.115.115 0 00.084-.126l-.703-3.447a.576.576 0 00-.565-.462h-4.192a.576.576 0 00-.566.462l-.702 3.353c-.052.126 0 .21 0 .21l3.26 2.357c.035.032.089.032.125 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.838 6.701a4.75 4.75 0 014.75-4.75h9.274a4.75 4.75 0 014.75 4.75v4.093a.75.75 0 01-1.5 0V6.7a3.25 3.25 0 00-3.25-3.25H5.588a3.25 3.25 0 00-3.25 3.25V17.3a3.25 3.25 0 003.25 3.25h5.88a.75.75 0 010 1.5h-5.88a4.75 4.75 0 01-4.75-4.75V6.7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DiamondMoneyOutlined.displayName = 'DiamondMoneyOutlined';
export default DiamondMoneyOutlined;
