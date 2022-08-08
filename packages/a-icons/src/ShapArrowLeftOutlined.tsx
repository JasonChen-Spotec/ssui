import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShapArrowLeftOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.833 0a6 6 0 00-6 6v12a6 6 0 006 6h12a6 6 0 006-6V6a6 6 0 00-6-6h-12zm8.132 18.913a.768.768 0 00.607.286.8.8 0 00.608-.287c.336-.381.336-1 0-1.382l-4.873-5.528 4.873-5.529c.336-.382.336-1 0-1.382a.802.802 0 00-.607-.291.802.802 0 00-.608.291l-5.482 6.22c-.335.382-.335 1 0 1.382l5.482 6.22z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShapArrowLeftOutlined.displayName = 'ShapArrowLeftOutlined';
export default ShapArrowLeftOutlined;
