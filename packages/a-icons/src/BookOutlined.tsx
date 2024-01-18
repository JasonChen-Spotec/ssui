import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BookOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17.5H5v2a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-2zM3.5 16v3.5a2 2 0 002 2h13a2 2 0 002-2V16h-17z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 4h-13a.5.5 0 00-.5.5V16h14V4.5a.5.5 0 00-.5-.5zm-13-1.5a2 2 0 00-2 2v12a1 1 0 001 1h15a1 1 0 001-1v-12a2 2 0 00-2-2h-13z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.75a.75.75 0 01.75.75v5.599l1.834-1.223a.75.75 0 01.832 0l1.834 1.223V3.5a.75.75 0 011.5 0v7a.75.75 0 01-1.166.624L12 9.401l-2.584 1.723A.75.75 0 018.25 10.5v-7A.75.75 0 019 2.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BookOutlined.displayName = 'BookOutlined';
export default BookOutlined;
