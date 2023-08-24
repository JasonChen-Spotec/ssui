import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function NoteOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.57 11.42A3 3 0 018 12.76l2.64 4.81c.198.358.298.761.29 1.17l-.05 2a1.16 1.16 0 01-.58 1 1.119 1.119 0 01-.53.13 1.21 1.21 0 01-.63-.18l-1.68-1a2.34 2.34 0 01-.83-.88L4 15a3.08 3.08 0 01-.32-2.01 2.14 2.14 0 011-1.57 2.12 2.12 0 011.89 0zm1.66 7.94l1.16.7-.01-1.38a.94.94 0 00-.11-.42l-2.63-4.81a1.52 1.52 0 00-.71-.69.761.761 0 00-.33-.08.53.53 0 00-.24.06.66.66 0 00-.29.49 1.58 1.58 0 00.2 1L7.9 19a.82.82 0 00.33.36z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.22 2.35l7 7a.75.75 0 01.22.56v7a4.75 4.75 0 01-4.75 4.75h-2.87a.75.75 0 010-1.5h2.87a3.26 3.26 0 003.25-3.25v-6.25h-4.25a2.76 2.76 0 01-2.75-2.75V3.66H9.69a3.25 3.25 0 00-3.25 3.25v2.65a.75.75 0 11-1.5 0V6.91a4.75 4.75 0 014.75-4.78h3c.199 0 .39.08.53.22zm.22 2.34v3.22c0 .69.56 1.25 1.25 1.25h3.22l-4.47-4.47z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

NoteOutlined.displayName = 'NoteOutlined';
export default NoteOutlined;
