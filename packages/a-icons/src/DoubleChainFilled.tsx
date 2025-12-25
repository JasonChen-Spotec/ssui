import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleChainFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM6 12a6 6 0 016-6h1V4h-1a8 8 0 00-8 8v1h2v-1zm8 0c0-.18-.024-.353-.068-.518L17.914 7.5 16.5 6.086l-3.982 3.982A2 2 0 1014 12z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChainFilled.displayName = 'DoubleChainFilled';
export default DoubleChainFilled;
