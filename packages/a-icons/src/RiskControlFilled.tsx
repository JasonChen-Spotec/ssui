import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RiskControlFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.5 1.457l8.75 4.134v7.094c0 3.798-3.118 7.787-8.079 9.199l-.207.058-.464.12-.47-.122c-4.92-1.316-8.091-5.182-8.272-8.957l-.006-.162-.002-7.23 8.75-4.134zm0 1.66L5.25 6.54l.002 6.261c.077 3.037 2.643 6.313 6.757 7.572l.2.06.204.055.086.023.083-.021c4.291-1.148 6.998-4.433 7.16-7.513l.006-.146.002-.147V6.541L12.5 3.116z"
        fill="currentColor"
      />
      <path
        d="M4.5 6.5l8-4 8 3.5v8l-3 5-5.5 2.5L7.5 19 5 15l-.5-8.5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.823 7.323a.75.75 0 01.354 1l-1.488 3.117H14.5a.75.75 0 01.664 1.1l-2 3.809a.75.75 0 11-1.328-.698l1.423-2.71H10.5a.75.75 0 01-.677-1.074l2-4.19a.75.75 0 011-.354z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RiskControlFilled.displayName = 'RiskControlFilled';
export default RiskControlFilled;
