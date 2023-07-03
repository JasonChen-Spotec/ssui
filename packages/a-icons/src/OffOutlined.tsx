import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OffOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.197 4.8c.452.37.867.79 1.238 1.248a8.912 8.912 0 011.965 5.616c0 4.825-3.76 8.736-8.4 8.736-4.64 0-8.4-3.911-8.4-8.736 0-2.139.739-4.098 1.965-5.616.37-.459.786-.877 1.238-1.248M12 9.6v-6"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OffOutlined.displayName = 'OffOutlined';
export default OffOutlined;
