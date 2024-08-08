import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OppositeArrowsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.2 10.76H10a.75.75 0 100-1.5H3.39a.72.72 0 00-.29.06.78.78 0 00-.41.41.87.87 0 000 .28v6.63a.75.75 0 001.5 0v-4.82l6.34 6.34a.73.73 0 00.53.22.75.75 0 00.53-1.28L5.2 10.76zM21.36 7.35a.75.75 0 00-1.5 0v4.83l-6.34-6.34a.74.74 0 00-1.06 0 .75.75 0 000 1.06l6.34 6.34H14a.75.75 0 000 1.5h6.63c.1 0 .199-.02.29-.06a.78.78 0 00.41-.41.867.867 0 00.05-.28l-.02-6.64z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OppositeArrowsOutlined.displayName = 'OppositeArrowsOutlined';
export default OppositeArrowsOutlined;
