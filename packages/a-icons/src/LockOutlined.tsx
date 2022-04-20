import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LockOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.463 13.902a1.66 1.66 0 10-3.32 0 1.62 1.62 0 00.39 1.06 1 1 0 01.23 1l-.21.62a.93.93 0 00.88 1.19h.74a.93.93 0 00.88-1.23l-.25-.62a1 1 0 01.23-1c.258-.279.41-.64.43-1.02z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.553 8.122v-3.12a3 3 0 00-3.11-3h-3.28a3 3 0 00-3.11 3v3.12a4.57 4.57 0 00-3 5l.95 5.77a4.85 4.85 0 004.86 3.88h3.88a4.85 4.85 0 004.88-3.91l.95-5.77a4.57 4.57 0 00-3.02-4.97zm-8-3.12a1.55 1.55 0 011.61-1.48h3.28a1.55 1.55 0 011.61 1.48v2.77H8.553v-2.77zm8.25 13.56l1-5.79a2.55 2.55 0 00-.65-2.06 3.22 3.22 0 00-2.46-1.09h-5.78a3.22 3.22 0 00-2.46 1.07 2.55 2.55 0 00-.6 2.08l.95 5.79a3 3 0 003.06 2.36h3.88a3 3 0 003.06-2.36z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LockOutlined.displayName = 'LockOutlined';
export default LockOutlined;
