import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.414 6l-6 6 6 6L15 19.414l-6.707-6.707a1 1 0 010-1.414L15 4.586 16.414 6z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LeftOutlined.displayName = 'LeftOutlined';
export default LeftOutlined;
