import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareRightUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.586l4.707 4.707a1 1 0 010 1.414L16 12.414 14.586 11l3-3H10a5 5 0 000 10h11v2H10a7 7 0 110-14h7.586l-3-3L16 1.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareRightUpOutlined.displayName = 'SquareRightUpOutlined';
export default SquareRightUpOutlined;
