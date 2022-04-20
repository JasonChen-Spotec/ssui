import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ShareOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.953 15.23c.451.002.894.126 1.28.36h-.01a2.49 2.49 0 11-3.49 1l-2.93-2.99a2.58 2.58 0 01-.68.29 2.5 2.5 0 11-.61-4.92c.516 0 1.02.161 1.44.46l2.78-2.78A2.48 2.48 0 0114.953 3a2.47 2.47 0 011.28.35 2.51 2.51 0 01-2.42 4.4l-2.94 2.94c.033.071.06.145.08.22a2.46 2.46 0 01-.15 1.61l3 3a2.55 2.55 0 011.15-.29zm0-10.73a1 1 0 00-.86.48 1 1 0 00-.11.76.94.94 0 00.45.61 1 1 0 00.51.15 1 1 0 00.86-.49 1 1 0 00-.34-1.37.94.94 0 00-.51-.14zm-6.44 7.97a1 1 0 01-1-.76 1 1 0 01.12-.76 1 1 0 01.61-.45h.24a1 1 0 01.89 1.51l-.06.07a1 1 0 01-.55.39h-.25zm6.43 6.21a1 1 0 00.86-.48 1 1 0 00-.34-1.32 1 1 0 00-.51-.15 1 1 0 00-.86.49 1 1 0 00.34 1.37.94.94 0 00.51.09z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShareOutlined.displayName = 'ShareOutlined';
export default ShareOutlined;
