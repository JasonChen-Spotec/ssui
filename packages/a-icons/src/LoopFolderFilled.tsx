import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LoopFolderFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 .586l2.707 2.707a1 1 0 010 1.414L6 7.414 4.586 6l.967-.967A3 3 0 003 8v1H1V8a5 5 0 014.601-4.984L4.586 2 6 .586zM23 15v1a5 5 0 01-4.601 4.984L19.414 22 18 23.414l-2.707-2.707a1 1 0 010-1.414L18 16.586 19.414 18l-.967.967A3 3 0 0021 16v-1h2z"
        fill="currentColor"
      />
      <path d="M8 9a7 7 0 100 14A7 7 0 008 9z" fill="currentColor" />
      <path
        d="M16 1a7.001 7.001 0 00-6.938 6.062 9.004 9.004 0 017.876 7.876A7.001 7.001 0 0016 1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoopFolderFilled.displayName = 'LoopFolderFilled';
export default LoopFolderFilled;
