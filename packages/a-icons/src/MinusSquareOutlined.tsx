import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function MinusSquareOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.666 12h6.667M9.5 20.333h5c4.166 0 5.833-1.667 5.833-5.833v-5c0-4.167-1.667-5.834-5.833-5.834h-5c-4.167 0-5.834 1.667-5.834 5.833v5c0 4.167 1.667 5.834 5.833 5.834z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MinusSquareOutlined.displayName = 'MinusSquareOutlined';
export default MinusSquareOutlined;
