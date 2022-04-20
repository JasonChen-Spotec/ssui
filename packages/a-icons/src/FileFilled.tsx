import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FileFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.82 10.267v7.498a3.412 3.412 0 01-3.412 3.412H5.412A3.412 3.412 0 012 17.765V6.412A3.412 3.412 0 015.412 3h4.57c1.065 0 1.928.863 1.928 1.927a1.927 1.927 0 001.927 1.896h4.57a3.412 3.412 0 013.413 3.444z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileFilled.displayName = 'FileFilled';
export default FileFilled;
