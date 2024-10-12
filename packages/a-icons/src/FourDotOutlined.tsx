import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FourDotOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm5.5 0a2 2 0 10-4 0 2 2 0 004 0zM14 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm5.5 0a2 2 0 10-4 0 2 2 0 004 0zM4 17.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm5.5 0a2 2 0 10-4 0 2 2 0 004 0zM14 17.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm5.5 0a2 2 0 10-4 0 2 2 0 004 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FourDotOutlined.displayName = 'FourDotOutlined';
export default FourDotOutlined;
