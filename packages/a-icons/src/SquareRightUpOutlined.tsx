import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareRightUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9.3a.3.3 0 00-.3.3V18a.3.3 0 00.3.3h12v1.8H6A2.1 2.1 0 013.9 18V9.6c0-1.16.94-2.1 2.1-2.1h12v1.8H6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7 8.4l-3.84-2.88 1.08-1.44L20.7 8.4l-5.76 4.32-1.08-1.44L17.7 8.4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareRightUpOutlined.displayName = 'SquareRightUpOutlined';
export default SquareRightUpOutlined;
