import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function BtcFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        d="M10 9.83a.94.94 0 01-.17.31.82.82 0 01-.21.19 1.61 1.61 0 01-.91.28H7.18V8.39H8.8a1.31 1.31 0 011.08.51.91.91 0 01.18.53 1.13 1.13 0 01-.07.39zM7.18 5.31h1.27a1.22 1.22 0 011 .46.88.88 0 01.17.5 1 1 0 01-.07.36.76.76 0 01-.15.28.86.86 0 01-.2.18 1.57 1.57 0 01-.84.26H7.18V5.31zm3.42 2.36a1.73 1.73 0 00.92-1.57c0-1.26-1.26-1.84-2-1.92h-.26V3H8v1.2h-.82V3H5.9v1.17H4.33v1.06h.44c.42 0 .61.27.61.45v4.64a.29.29 0 01-.28.29h-.48l-.24 1.2h1.53V13h1.27v-1.2H8V13h1.26v-1.17h.09a2.44 2.44 0 002.71-2.2 2.17 2.17 0 00-1.46-1.96z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BtcFilled.displayName = 'BtcFilled';
export default BtcFilled;
