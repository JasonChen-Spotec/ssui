import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LoopOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.76 6.644a.75.75 0 000 1.5 3.28 3.28 0 013.26 3.25v2a3.28 3.28 0 01-3.26 3.25h-2.22l1.37-1.36a.75.75 0 000-1.06.74.74 0 00-1.06 0l-2.65 2.64a.778.778 0 00-.16.24.83.83 0 000 .58.78.78 0 00.16.24l2.65 2.64a.75.75 0 001.06-1.06l-1.37-1.36h2.22a4.78 4.78 0 004.76-4.75v-2a4.78 4.78 0 00-4.76-4.75zM12.48 7.684a.83.83 0 000-.58 1 1 0 00-.16-.24l-2.65-2.64a.74.74 0 00-1.06 0 .75.75 0 000 1.06l1.37 1.36H7.76A4.78 4.78 0 003 11.394v2a4.78 4.78 0 004.76 4.75.75.75 0 000-1.5 3.28 3.28 0 01-3.26-3.25v-2a3.28 3.28 0 013.26-3.25h2.21l-1.36 1.36a.75.75 0 001.06 1.06l2.65-2.64a1 1 0 00.16-.24z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoopOutlined.displayName = 'LoopOutlined';
export default LoopOutlined;
