import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GroupFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.914 1.636a2 2 0 00-2 2v3.398a2 2 0 002 2H11V11.5H8.222a3 3 0 00-3 3v.647H3.636a2 2 0 00-2 2v3.217a2 2 0 002 2H9.56a2 2 0 002-2v-3.217a2 2 0 00-2-2H7.222V14.5a1 1 0 011-1h7.556a1 1 0 011 1v.647h-2.337a2 2 0 00-2 2v3.217a2 2 0 002 2h5.922a2 2 0 002-2v-3.217a2 2 0 00-2-2h-1.585V14.5a3 3 0 00-3-3H13V9.034h2.086a2 2 0 002-2V3.636a2 2 0 00-2-2H8.914z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GroupFilled.displayName = 'GroupFilled';
export default GroupFilled;
