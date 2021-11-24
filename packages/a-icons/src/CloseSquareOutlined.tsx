import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CloseSquareOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm13.768 17.768A2.5 2.5 0 0020.5 18V6A2.5 2.5 0 0018 3.5H6A2.5 2.5 0 003.5 6v12A2.5 2.5 0 006 20.5h12a2.5 2.5 0 001.768-.732z"
        fill="currentColor"
      />
      <path
        d="M15.69 8.73a.75.75 0 00-1.06 0l-2.42 2.42-2.42-2.42a.75.75 0 00-1.06 1.06l2.42 2.42-2.42 2.42a.75.75 0 001.06 1.06l2.42-2.42 2.42 2.42c.14.14.331.22.53.22a.79.79 0 00.53-.22.75.75 0 000-1.06l-2.42-2.42 2.42-2.42a.75.75 0 000-1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseSquareOutlined.displayName = 'CloseSquareOutlined';
export default CloseSquareOutlined;
