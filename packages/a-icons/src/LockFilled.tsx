import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LockFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.222 10.2h.89c.235 0 .461.095.628.264.166.168.26.397.26.636v9a.906.906 0 01-.26.636.883.883 0 01-.629.264H4.89a.883.883 0 01-.629-.264A.906.906 0 014 20.1v-9c0-.239.094-.468.26-.636a.883.883 0 01.629-.264h.889v-.9c0-.827.16-1.647.473-2.41a6.306 6.306 0 011.35-2.045A6.218 6.218 0 019.618 3.48a6.156 6.156 0 014.762 0c.755.316 1.441.78 2.019 1.365a6.306 6.306 0 011.349 2.044c.312.764.473 1.584.473 2.411v.9zm-1.778 0v-.9a4.529 4.529 0 00-1.301-3.182A4.417 4.417 0 0012 4.8c-1.179 0-2.31.474-3.143 1.318A4.529 4.529 0 007.556 9.3v.9h8.888zm-5.333 3.6v3.6h1.778v-3.6H11.11z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LockFilled.displayName = 'LockFilled';
export default LockFilled;
