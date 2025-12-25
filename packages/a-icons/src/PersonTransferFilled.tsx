import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PersonTransferFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM11.655 14H7a5 5 0 00-5 5v3h9.655a7.464 7.464 0 01-1.155-4c0-1.47.423-2.842 1.155-4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.593 2.25c-.82.134-1.642.407-2.3.928a3.114 3.114 0 00-1.196 2.368H14.576a.192.192 0 00-.176.122.203.203 0 00.038.205v.001l1.309 1.67a.352.352 0 00.582-.043l1.22-1.583.015-.02c.03-.038.061-.078.065-.129.017-.102-.065-.21-.17-.216-.116.003-.232.003-.348.002h-.197v-.019c.021-.464.042-.934.18-1.38.095-.321.248-.622.45-.888.292-.384.678-.686 1.089-.932.049-.025.012-.105-.04-.085zm1.665 1.201a.35.35 0 00-.434-.096c-.075.035-.123.102-.17.168l-.023.032-.427.55c-.269.345-.538.69-.806 1.037-.084.108-.012.287.126.304.116.003.233.003.35.003h.2c0 .378-.004.76-.08 1.133a2.71 2.71 0 01-.392.971c-.272.42-.662.75-1.082 1.014l-.067.04c-.037.021-.075.043-.109.068-.03.034.007.091.05.075.607-.099 1.208-.27 1.751-.561a3.457 3.457 0 001.123-.937 3.11 3.11 0 00.636-1.798h.51a.195.195 0 00.19-.146c.02-.072-.01-.146-.048-.206l-.649-.826a734.7 734.7 0 00-.649-.825z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PersonTransferFilled.displayName = 'PersonTransferFilled';
export default PersonTransferFilled;
