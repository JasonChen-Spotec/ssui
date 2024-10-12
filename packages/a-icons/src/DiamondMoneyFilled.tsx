import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DiamondMoneyFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.488 2.372H5.215a4 4 0 00-4 4V16.97a4 4 0 004 4h8.273a4.98 4.98 0 002.198-.508L13.6 18.945a1.656 1.656 0 01-.63-1.908l.671-3.28a2.096 2.096 0 012.096-1.708h2.752V6.372a4 4 0 00-4-4zM6.783 6.937a.75.75 0 10-1.152.96l1.338 1.606H5.73a.75.75 0 000 1.5h2.086v1.336H5.73a.75.75 0 000 1.5h2.086v2.086a.75.75 0 001.5 0v-2.086h2.086a.75.75 0 000-1.5H9.316v-1.336h2.086a.75.75 0 000-1.5h-1.23l1.337-1.606a.75.75 0 10-1.152-.96L8.57 9.08 6.783 6.937z"
        fill="currentColor"
      />
      <path
        d="M17.753 14.85l-1.52 1.95a.796.796 0 00.137 1.11c.14.102.309.157.482.158.242 0 .471-.112.618-.304l1.53-1.95a.788.788 0 00-1.247-.963z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.798 13.708l.692 3.364c.21.68-.045 1.417-.629 1.823l-3.259 2.369c-.59.42-1.38.42-1.97 0l-3.259-2.369a1.656 1.656 0 01-.629-1.907l.671-3.28A2.096 2.096 0 0115.511 12h4.191a2.148 2.148 0 012.096 1.708zm-4.118 6.235l3.259-2.347a.115.115 0 00.084-.126l-.702-3.447a.576.576 0 00-.566-.461h-4.192a.576.576 0 00-.566.46l-.702 3.354c-.052.126 0 .21 0 .21l3.26 2.357c.035.032.09.032.125 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DiamondMoneyFilled.displayName = 'DiamondMoneyFilled';
export default DiamondMoneyFilled;
