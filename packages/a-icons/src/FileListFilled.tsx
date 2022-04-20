import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FileListFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM8 7v2h8V7H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileListFilled.displayName = 'FileListFilled';
export default FileListFilled;
