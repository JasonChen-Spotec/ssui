import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DocumentEditOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.71 16.71l-2.42-2.42a1.001 1.001 0 00-1.42 0l-3.58 3.58a1 1 0 00-.29.71V21a1 1 0 001 1h2.42a.999.999 0 00.71-.29l3.58-3.58a.998.998 0 000-1.42zM16 20h-1v-1l2.58-2.58 1 1L16 20z"
        fill="currentColor"
      />
      <path
        d="M19 12V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path fill="currentColor" d="M5 8h13v2H5z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocumentEditOutlined.displayName = 'DocumentEditOutlined';
export default DocumentEditOutlined;
