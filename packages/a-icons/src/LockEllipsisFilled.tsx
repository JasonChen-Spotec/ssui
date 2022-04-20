import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LockEllipsisFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 8.5h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1v-12a1 1 0 011-1h2v-1a6 6 0 1112 0v1zm-2 0v-1a4 4 0 10-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LockEllipsisFilled.displayName = 'LockEllipsisFilled';
export default LockEllipsisFilled;
