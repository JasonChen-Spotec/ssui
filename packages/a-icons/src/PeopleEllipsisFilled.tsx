import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleEllipsisFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm6.25-.463V14.25h-1.5V18c0 .284.16.544.415.67l2.67 1.336.671-1.341-2.256-1.128z"
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

PeopleEllipsisFilled.displayName = 'PeopleEllipsisFilled';
export default PeopleEllipsisFilled;
