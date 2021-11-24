import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function LoopFolderFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.949 6.194h-5.022a2.097 2.097 0 01-2.097-2.097A2.097 2.097 0 009.733 2H4.711A3.711 3.711 0 001 5.7v12.424a3.711 3.711 0 003.711 3.722H18.95a3.722 3.722 0 003.711-3.722V9.915a3.722 3.722 0 00-3.711-3.721zm-1.772 12.36H15.94a.776.776 0 01-.63 1.237.797.797 0 01-.534-.21l-1.321-1.236a.797.797 0 010-1.143l1.3-1.237a.786.786 0 011.111 0c.255.27.281.684.063.985h1.248a1.688 1.688 0 001.814-1.698.786.786 0 111.572 0 3.26 3.26 0 01-3.386 3.302zm1.845-4.403l1.3-1.237v-.021a.797.797 0 000-1.143l-1.31-1.237a.787.787 0 00-1.175 1.048H16.6a3.26 3.26 0 00-3.386 3.271.786.786 0 101.572 0 1.688 1.688 0 011.814-1.698h1.258a.776.776 0 001.164 1.017z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoopFolderFilled.displayName = 'LoopFolderFilled';
export default LoopFolderFilled;
