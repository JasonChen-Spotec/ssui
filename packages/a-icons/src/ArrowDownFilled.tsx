import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowDownFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.42 6c-.403 0-.808.154-1.116.462L12 13.767 4.696 6.462a1.581 1.581 0 00-2.234 0 1.581 1.581 0 000 2.234l8.42 8.42a1.581 1.581 0 002.235 0l8.42-8.42a1.581 1.581 0 000-2.234A1.574 1.574 0 0020.422 6z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowDownFilled.displayName = 'ArrowDownFilled';
export default ArrowDownFilled;
