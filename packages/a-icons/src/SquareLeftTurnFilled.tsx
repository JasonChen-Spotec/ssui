import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareLeftTurnFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.686 3h6.748a5.686 5.686 0 015.686 5.686v6.748a5.686 5.686 0 01-5.686 5.686H8.686A5.686 5.686 0 013 15.434V8.686A5.686 5.686 0 018.686 3zm4.995 14.604a3.79 3.79 0 003.648-3.79l.067-1.47a3.79 3.79 0 00-3.791-3.79H9.217l.777-.797a.71.71 0 00-1.005-1.004L6.98 8.762a.682.682 0 00-.151.237.673.673 0 000 .54.74.74 0 00.151.228l2.028 2.009a.701.701 0 001.005 0 .71.71 0 000-1.005l-.796-.796h4.369a2.35 2.35 0 012.35 2.34v1.527a2.34 2.34 0 01-2.265 2.34H8.27a.71.71 0 100 1.422h5.412z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareLeftTurnFilled.displayName = 'SquareLeftTurnFilled';
export default SquareLeftTurnFilled;
