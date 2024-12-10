import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GiftBoxOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5.5A3.49 3.49 0 0010 1.55 3.49 3.49 0 007.5.5H7a3 3 0 00-2.83 4H2a2 2 0 00-2 2v3a2 2 0 002 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 002-2v-3a2 2 0 00-2-2h-2.17A3 3 0 0013 .5h-.5zm-1.5 4V4a1.5 1.5 0 011.5-1.5h.5a1 1 0 110 2h-2zm-2 2H2v3h7v-3zm0 5H4v6h5v-6zm2 6v-6h5v6h-5zm0-8v-3h7v3h-7zm-2-5H7a1 1 0 010-2h.5A1.5 1.5 0 019 4v.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GiftBoxOutlined.displayName = 'GiftBoxOutlined';
export default GiftBoxOutlined;
