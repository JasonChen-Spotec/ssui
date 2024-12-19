import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AscOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.146 7.414V20h-2V5a1 1 0 011.707-.707l4 4-1.414 1.414-2.293-2.293z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AscOutlined.displayName = 'AscOutlined';
export default AscOutlined;
