import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RectBoardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.3h-.8a2.4 2.4 0 00-2.4 2.4v8.6a2.4 2.4 0 002.4 2.4h7.6a2.4 2.4 0 002.4-2.4V8.7a2.4 2.4 0 00-2.4-2.4H15v1.2h.8A1.2 1.2 0 0117 8.7v8.6a1.2 1.2 0 01-1.2 1.2H8.2A1.2 1.2 0 017 17.3V8.7a1.2 1.2 0 011.2-1.2H9V6.3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.4 6a1.1 1.1 0 011.1-1.1h5A1.1 1.1 0 0115.6 6v1.5a1.1 1.1 0 01-1.1 1.1h-5a1.1 1.1 0 01-1.1-1.1V6zm1.2.1v1.3h4.8V6.1H9.6z"
        fill="currentColor"
      />
      <path
        d="M9 12.5h6M9 15.5h4"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RectBoardOutlined.displayName = 'RectBoardOutlined';
export default RectBoardOutlined;
