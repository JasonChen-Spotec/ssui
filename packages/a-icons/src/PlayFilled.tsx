import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PlayFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.36 9.7l-7.25-4.19a3 3 0 00-4.5 2.6v8.37a3 3 0 004.5 2.6l7.25-4.19a3 3 0 000-5.19z"
        fill="currentColor"
      />
      <path
        d="M16.46 13.34l-7.25 4.18a1.19 1.19 0 01-.6.17 1.21 1.21 0 01-1.21-1.21V8.11c0-.668.542-1.21 1.21-1.21.212.003.419.061.6.17l7.25 4.18a1.2 1.2 0 01.6 1.05 1.19 1.19 0 01-.6 1.04z"
        fill="inherit"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PlayFilled.displayName = 'PlayFilled';
export default PlayFilled;
