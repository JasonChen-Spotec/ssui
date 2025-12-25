import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleAddFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm6.25-.75v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5h-2z"
        fill="currentColor"
      />
      <path
        d="M7 14h4.655a7.464 7.464 0 00-1.155 4c0 1.47.423 2.842 1.155 4H2v-3a5 5 0 015-5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleAddFilled.displayName = 'PeopleAddFilled';
export default PeopleAddFilled;
