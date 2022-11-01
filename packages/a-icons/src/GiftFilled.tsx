import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GiftFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 12.749v5.25a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-5.25h12zm-4.125-8.25a2.625 2.625 0 012.372 3.75h2.503a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75v-2.25a.75.75 0 01.75-.75h2.503A2.625 2.625 0 0112 5.287a2.609 2.609 0 011.874-.788zm-3.75 1.5a1.125 1.125 0 00-.108 2.244l.108.006h1.125V7.124a1.125 1.125 0 00-1.017-1.12l-.108-.005zm3.75 0l-.108.005a1.125 1.125 0 00-1.012 1.012l-.005.108v1.125h1.125l.108-.006a1.125 1.125 0 000-2.24L13.875 6z"
        fill="currentColor"
      />
      <path
        d="M18 18v-5.25H6V18a.75.75 0 00.75.75h10.5A.75.75 0 0018 18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GiftFilled.displayName = 'GiftFilled';
export default GiftFilled;
