import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BookFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a4 4 0 014-4h10a4 4 0 014 4v14a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm4 16a2 2 0 01-2-2h14a2 2 0 01-2 2H7zm4.361-9.9a.5.5 0 01-.861-.346V3h6v7.754a.5.5 0 01-.861.346L13.86 9.24a.5.5 0 00-.722 0L11.36 11.1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BookFilled.displayName = 'BookFilled';
export default BookFilled;
