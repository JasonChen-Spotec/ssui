import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function Edit2Filled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244-7.9 7.9h.001zm5.07-13.556l2.122-2.122a1 1 0 011.414 0l2.829 2.83a1 1 0 010 1.413l-2.122 2.121-4.242-4.242h-.001z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

Edit2Filled.displayName = 'Edit2Filled';
export default Edit2Filled;
