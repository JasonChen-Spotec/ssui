import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArrowTopRightOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.92 6.62a1 1 0 00-.54-.54A1 1 0 0017 6H7a1 1 0 000 2h7.59l-8.3 8.29a1 1 0 00.325 1.639 1 1 0 001.095-.219L16 9.41V17a1 1 0 002 0V7a.997.997 0 00-.08-.38z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowTopRightOutlined.displayName = 'ArrowTopRightOutlined';
export default ArrowTopRightOutlined;
