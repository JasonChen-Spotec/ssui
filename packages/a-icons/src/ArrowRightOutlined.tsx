import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4.586l6.707 6.707a1 1 0 010 1.414L14 19.414 12.586 18l5-5H3v-2h14.586l-5-5L14 4.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowRightOutlined.displayName = 'ArrowRightOutlined';
export default ArrowRightOutlined;
