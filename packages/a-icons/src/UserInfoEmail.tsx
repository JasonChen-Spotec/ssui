import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function UserInfoEmail(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 5H8C5.6 5 4 6.235 4 9.118v5.764C4 17.765 5.6 19 8 19h8c2.4 0 4-1.235 4-4.118V9.118C20 6.235 18.4 5 16 5zm.376 5.015l-2.504 2.06c-.528.436-1.2.65-1.872.65-.672 0-1.352-.214-1.872-.65l-2.504-2.06a.647.647 0 01-.096-.873.587.587 0 01.84-.098l2.504 2.058c.608.503 1.64.503 2.248 0l2.504-2.058a.58.58 0 01.84.098.637.637 0 01-.088.873z"
        fill="currentColor"
      />
      <circle cx={18.5} cy={16.5} r={4.5} fill="#DC4946" />
      <path
        d="M16 15.5h3M16 17.5h5"
        stroke="#fff"
        strokeWidth={0.75}
        strokeLinecap="square"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UserInfoEmail.displayName = 'UserInfoEmail';
export default UserInfoEmail;
