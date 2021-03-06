import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BiscuitOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.8 8.94l-5.77 5.77a.75.75 0 001.06 1.06L15.86 10a.75.75 0 10-1.06-1.06z"
        fill="currentColor"
      />
      <circle cx={9.851} cy={10.1} r={0.75} fill="currentColor" />
      <circle cx={15.131} cy={14.61} r={0.75} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.64 8.221a2.27 2.27 0 01-.55 2.459 2.26 2.26 0 000 3.37A2.27 2.27 0 0120.58 18h-.25a2.28 2.28 0 00-2.26 2.39 2.26 2.26 0 01-2.28 2.38 2.21 2.21 0 01-1.66-.75 2.27 2.27 0 00-3.37 0 2.21 2.21 0 01-1.66.75 2.26 2.26 0 01-2.28-2.4 2.28 2.28 0 00-2.26-2.38h-.25a2.27 2.27 0 01-1.51-3.86 2.26 2.26 0 000-3.36 2.27 2.27 0 011.51-4h.25a2.27 2.27 0 002.26-2.42A2.26 2.26 0 019.1 2.01a2.18 2.18 0 011.66.76 2.29 2.29 0 003.37 0A2.18 2.18 0 0115.79 2a2.26 2.26 0 012.28 2.39 2.27 2.27 0 002.26 2.38h.25a2.27 2.27 0 012.06 1.451zm-1.65 7.659a.41.41 0 00-.12-.5v-.06a4.08 4.08 0 010-6 .41.41 0 00.12-.5.42.42 0 00-.41-.29h-.25a4.08 4.08 0 01-2.95-1.27 4.13 4.13 0 01-1.12-3 .41.41 0 00-.1-.33.52.52 0 00-.37-.16.42.42 0 00-.37.16 4.08 4.08 0 01-3 1.34 4.09 4.09 0 01-3-1.34.42.42 0 00-.32-.16.52.52 0 00-.37.16.41.41 0 00-.1.33 4.08 4.08 0 01-4.07 4.32h-.22a.43.43 0 00-.44.29.41.41 0 00.12.5 4.1 4.1 0 011.34 3 4.08 4.08 0 01-1.34 3 .41.41 0 00-.12.5.41.41 0 00.41.3h.25a4.09 4.09 0 014.07 4.28.38.38 0 00.1.32.52.52 0 00.41.15.44.44 0 00.32-.15 4.06 4.06 0 016.05 0 .44.44 0 00.28.16.52.52 0 00.37-.16.38.38 0 00.1-.32 4.17 4.17 0 011.12-3 4.12 4.12 0 012.95-1.27h.22a.42.42 0 00.44-.3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BiscuitOutlined.displayName = 'BiscuitOutlined';
export default BiscuitOutlined;
