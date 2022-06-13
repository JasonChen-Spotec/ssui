import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function InviteFriendFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 19.5h12V18a3.75 3.75 0 00-3.75-3.75h-4.5A3.75 3.75 0 003 18v1.5zM17.88 8.398h1.44v7.2h-1.44v-7.2z"
        fill="currentColor"
      />
      <path
        d="M22.2 11.278v1.44H15v-1.44h7.2zM9 12.6a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

InviteFriendFilled.displayName = 'InviteFriendFilled';
export default InviteFriendFilled;
