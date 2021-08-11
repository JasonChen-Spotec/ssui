import * as React from 'react';
import Icon from 'assui/lib/Icon';

function UserFilled2(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0h4.4v4.4c0 2.5-2 4.4-4.4 4.4s-4.4-2-4.4-4.4S5.5 0 8 0zM4 9.8h8c1.7 0 3.1 1.4 3.1 3.1v.4c0 1.5-1.2 2.7-2.7 2.7H3.6C2.1 16 .9 14.8.9 13.3v-.4c0-1.7 1.4-3.1 3.1-3.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UserFilled2.displayName = 'UserFilled2';
export default UserFilled2;
