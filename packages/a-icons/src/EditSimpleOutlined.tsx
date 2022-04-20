import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EditSimpleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.706 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5.52M12 12l7-7"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EditSimpleOutlined.displayName = 'EditSimpleOutlined';
export default EditSimpleOutlined;
