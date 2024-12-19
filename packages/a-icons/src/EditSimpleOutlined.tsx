import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EditSimpleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.293 2.293l-12 12 1.414 1.414 12-12-1.414-1.414z" fill="currentColor" />
      <path
        d="M6 3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EditSimpleOutlined.displayName = 'EditSimpleOutlined';
export default EditSimpleOutlined;
