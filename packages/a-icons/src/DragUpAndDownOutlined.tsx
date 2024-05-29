import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DragUpAndDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.21 6.21l.79-.8V8a1 1 0 002 0V5.41l.79.8a1 1 0 001.639-.326 1 1 0 00-.219-1.094l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 101.42 1.42zM16 11H8a1 1 0 000 2h8a1 1 0 000-2zm-2.21 6.79l-.79.8V16a1 1 0 00-2 0v2.59l-.79-.8a1.005 1.005 0 00-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.004 1.004 0 10-1.42-1.42z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DragUpAndDownOutlined.displayName = 'DragUpAndDownOutlined';
export default DragUpAndDownOutlined;
