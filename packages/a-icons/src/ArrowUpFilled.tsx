import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowUpFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.42 17.579c-.403 0-.808-.154-1.116-.462L12 9.81l-7.304 7.306a1.581 1.581 0 01-2.234 0 1.581 1.581 0 010-2.234l8.42-8.421a1.581 1.581 0 012.235 0l8.42 8.42a1.581 1.581 0 010 2.235 1.574 1.574 0 01-1.116.462z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowUpFilled.displayName = 'ArrowUpFilled';
export default ArrowUpFilled;
