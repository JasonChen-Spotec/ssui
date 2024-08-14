import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GroupFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 2h-3.5A2.25 2.25 0 008 4.25v3.5A2.25 2.25 0 0010.25 10h1.25v2.232l-2.151 1.435A2.243 2.243 0 007.75 13h-3.5A2.25 2.25 0 002 15.25v3.5A2.25 2.25 0 004.25 21h3.5A2.25 2.25 0 0010 18.75v-3.5c0-.257-.043-.504-.122-.734L12 13.1l2.123 1.415c-.08.23-.123.477-.123.734v3.5A2.25 2.25 0 0016.25 21h3.5A2.25 2.25 0 0022 18.75v-3.5A2.25 2.25 0 0019.75 13h-3.5c-.625 0-1.19.255-1.599.667L12.5 12.232V10h1.25A2.25 2.25 0 0016 7.75v-3.5A2.25 2.25 0 0013.75 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GroupFilled.displayName = 'GroupFilled';
export default GroupFilled;
