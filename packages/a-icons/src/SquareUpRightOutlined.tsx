import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SquareUpRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.58 11.39a.79.79 0 00.53.22.77.77 0 00.53-.22l2.93-2.93a.72.72 0 00.16-.25.71.71 0 000-.57.779.779 0 00-.16-.24l-2.93-2.93a.75.75 0 10-1.06 1.06l1.65 1.65h-7.09a5.2 5.2 0 00-5.2 5.2v2.28a5.11 5.11 0 005 5.09h7.18a.76.76 0 00.78-.75.75.75 0 00-.74-.75H10a3.69 3.69 0 01-3.58-3.7v-2.17a3.7 3.7 0 013.7-3.7h7.09l-1.65 1.65a.75.75 0 00.02 1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquareUpRightOutlined.displayName = 'SquareUpRightOutlined';
export default SquareUpRightOutlined;
