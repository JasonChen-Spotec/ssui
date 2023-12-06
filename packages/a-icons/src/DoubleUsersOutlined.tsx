import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleUsersOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.3 12.22A4.92 4.92 0 0014 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 001 19.5a1 1 0 102 0 6 6 0 1112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM9 11.5a3 3 0 110-6 3 3 0 010 6zm9.74.32A5 5 0 0015 3.5a1 1 0 100 2 3 3 0 013 3 3 3 0 01-1.5 2.59 1 1 0 00-.05 1.7l.39.26.13.07a7 7 0 014 6.38 1 1 0 002 0 9 9 0 00-4.23-7.68z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleUsersOutlined.displayName = 'DoubleUsersOutlined';
export default DoubleUsersOutlined;
