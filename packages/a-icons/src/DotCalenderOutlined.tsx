import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DotCalenderOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 14a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2zm-5 4a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2zM7 14a1 1 0 100-2 1 1 0 000 2zM19 4h-1V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16v9zm0-11H4V7a1 1 0 011-1h14a1 1 0 011 1v1zM7 18a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DotCalenderOutlined.displayName = 'DotCalenderOutlined';
export default DotCalenderOutlined;
