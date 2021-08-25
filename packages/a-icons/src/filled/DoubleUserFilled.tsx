import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function DoubleUserFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M16 13.1c-.3-1.4-1.1-2.6-2.3-3.4s-2.6-1-3.9-.6c.8 1 1.3 2.1 1.6 3.4.2.9 0 1.9-.4 2.6h3.4c.5 0 .9-.2 1.2-.6.4-.4.5-.9.4-1.4zM4.9 8C2.6 8 .6 10 0 12.9c-.1.5 0 1.1.3 1.5.3.4.7.7 1.2.7h6.8c.5 0 .9-.3 1.2-.7.3-.4.4-1 .3-1.5C9.2 10 7.2 8 4.9 8zM11.6 8c1.5 0 2.7-1.2 2.7-2.7S13 2.7 11.6 2.7 8.9 3.9 8.9 5.3 10.1 8 11.6 8zM4.9 7.1C6.6 7.1 8 5.7 8 4S6.6.9 4.9.9 1.8 2.3 1.8 4s1.4 3.1 3.1 3.1z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleUserFilled.displayName = 'DoubleUserFilled';
export default DoubleUserFilled;
