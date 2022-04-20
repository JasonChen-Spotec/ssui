import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BoxAddFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.92 5l-5.85-3.25a3.09 3.09 0 00-3 0L5.24 5a3.08 3.08 0 00-1.58 2.69v6.22A2.51 2.51 0 002.5 16v4.1A2.53 2.53 0 005 22.63h4.09a2.54 2.54 0 002.53-2.49 3 3 0 002.45-.22l5.85-3.25A3.08 3.08 0 0021.5 14V7.69A3.08 3.08 0 0019.92 5zM10 20.1a.88.88 0 01-.87.87H5a.87.87 0 01-.86-.87V16a.87.87 0 01.86-.84h4.09A.88.88 0 0110 16v4.1zm3.92-9.1l4.71-2.62a.87.87 0 00.37-1.2.91.91 0 00-1.2-.36l-4.69 2.62a1 1 0 01-1 0l-4.7-2.62a.91.91 0 00-1.22.36.87.87 0 00.34 1.2L11.24 11c.094.05.188.085.28.118.055.02.108.04.16.062v4.08a.9.9 0 101.8 0v-4.08c.052-.022.105-.042.16-.062.091-.033.186-.068.28-.118z"
        fill="currentColor"
      />
      <path
        d="M8.41 17.24h-.53v-.53a.83.83 0 10-1.66 0v.53h-.53a.83.83 0 000 1.65h.53v.53a.83.83 0 101.66 0v-.53h.53a.83.83 0 100-1.65z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BoxAddFilled.displayName = 'BoxAddFilled';
export default BoxAddFilled;
