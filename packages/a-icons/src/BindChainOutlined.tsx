import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BindChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.507 5.496A4.246 4.246 0 0118.51 11.5l-.01.01-2.097 2.097a4.246 4.246 0 01-6.403-.458.75.75 0 011.201-.899 2.745 2.745 0 004.141.297l2.093-2.093a2.746 2.746 0 00-3.883-3.882l-1.199 1.191A.75.75 0 0111.296 6.7l1.21-1.204zm-3.392 3.92a4.246 4.246 0 014.884 1.436.75.75 0 11-1.201.898 2.746 2.746 0 00-4.141-.296l-2.093 2.092a2.746 2.746 0 003.883 3.883l1.19-1.19a.75.75 0 011.061 1.06l-1.205 1.205A4.246 4.246 0 015.49 12.5l.01-.01 2.097-2.097c.43-.43.948-.764 1.519-.976z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BindChainOutlined.displayName = 'BindChainOutlined';
export default BindChainOutlined;
