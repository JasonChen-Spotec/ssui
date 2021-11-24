import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.64 22H7.36a3.39 3.39 0 01-3.18-4.15l.24-1.14A3.29 3.29 0 017.59 14h8.82a3.29 3.29 0 013.17 2.71l.24 1.14A3.39 3.39 0 0116.64 22zM12.5 12h-1a4 4 0 01-4-4V5.36A3.35 3.35 0 0110.86 2h2.28a3.35 3.35 0 013.36 3.36V8a4 4 0 01-4 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleFilled.displayName = 'PeopleFilled';
export default PeopleFilled;
