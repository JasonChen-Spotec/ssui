import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BookFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.5 12.5h17v7a2 2 0 01-2 2h-13a2 2 0 01-2-2v-7z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17.5H5v2a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-2zM3.5 16v3.5a2 2 0 002 2h13a2 2 0 002-2V16h-17z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 4.5a2 2 0 012-2h13a2 2 0 012 2v12a1 1 0 01-1 1h-15a1 1 0 01-1-1v-12zM9 10.63V5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5.63a.5.5 0 01-.752.431l-1.996-1.164a.5.5 0 00-.504 0l-1.996 1.164A.5.5 0 019 10.63z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BookFilled.displayName = 'BookFilled';
export default BookFilled;
