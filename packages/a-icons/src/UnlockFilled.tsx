import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function UnlockFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.556 10.201H19.11c.236 0 .462.095.629.264.166.169.26.398.26.636v9a.905.905 0 01-.26.635.883.883 0 01-.629.264H4.89a.883.883 0 01-.629-.264A.905.905 0 014 20.1v-8.999c0-.238.094-.467.26-.636a.884.884 0 01.629-.264h.889v-.9c0-1.419.472-2.797 1.342-3.91a6.214 6.214 0 013.45-2.222 6.153 6.153 0 014.068.425 6.258 6.258 0 012.928 2.89l-1.59.804a4.47 4.47 0 00-2.092-2.064 4.395 4.395 0 00-2.905-.304 4.439 4.439 0 00-2.465 1.588A4.535 4.535 0 007.556 9.3v.9zm2.666 4.5v1.8h3.556v-1.8h-3.556z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UnlockFilled.displayName = 'UnlockFilled';
export default UnlockFilled;
