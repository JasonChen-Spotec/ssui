import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PriceTagOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.9 2.1l9.9 1.415 1.413 9.9-9.192 9.192a1 1 0 01-1.414 0l-9.9-9.9a1 1 0 010-1.414L10.9 2.1zm2.828 8.486a2 2 0 102.829-2.83 2 2 0 00-2.829 2.83z"
        stroke="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PriceTagOutlined.displayName = 'PriceTagOutlined';
export default PriceTagOutlined;
