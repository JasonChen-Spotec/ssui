import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GroupFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 2h-3.5A2.25 2.25 0 008 4.25v3.5A2.25 2.25 0 0010.25 10h1v2.099l-2.093 1.395A2.24 2.24 0 007.75 13h-3.5A2.25 2.25 0 002 15.25v3.5A2.25 2.25 0 004.25 21h3.5A2.25 2.25 0 0010 18.75v-3.5c0-.165-.018-.326-.052-.48L12 13.4l2.052 1.368a2.26 2.26 0 00-.052.481v3.5A2.25 2.25 0 0016.25 21h3.5A2.25 2.25 0 0022 18.75v-3.5A2.25 2.25 0 0019.75 13h-3.5a2.24 2.24 0 00-1.407.494l-2.093-1.395V10h1A2.25 2.25 0 0016 7.75v-3.5A2.25 2.25 0 0013.75 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GroupFilled.displayName = 'GroupFilled';
export default GroupFilled;
