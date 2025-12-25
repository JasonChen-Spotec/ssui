import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ExternalLinkFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 2h-7v2h4.586l-2.423 2.42A3.484 3.484 0 0014.5 6h-9A3.5 3.5 0 002 9.5v9A3.5 3.5 0 005.5 22h9a3.5 3.5 0 003.5-3.5v-9c0-.603-.152-1.17-.42-1.665L13 12.415 11.586 11l4.577-4.577.011.006a4.468 4.468 0 011.402 1.406L20 5.415V10h2V3a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ExternalLinkFilled.displayName = 'ExternalLinkFilled';
export default ExternalLinkFilled;
