import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleChevronOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M18.64 5.232a1 1 0 01.128 1.408L14.302 12l4.466 5.36a1 1 0 01-1.536 1.28l-4.467-5.36a2 2 0 010-2.56l4.467-5.36a1 1 0 011.408-.128zM10.64 5.232a1 1 0 01.128 1.408L6.302 12l4.466 5.36a1 1 0 01-1.536 1.28l-4.467-5.36a2 2 0 010-2.56l4.467-5.36a1 1 0 011.408-.128z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChevronOutlined.displayName = 'DoubleChevronOutlined';
export default DoubleChevronOutlined;
