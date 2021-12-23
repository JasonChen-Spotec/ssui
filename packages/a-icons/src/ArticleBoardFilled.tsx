import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ArticleBoardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 15 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.074 1.527v-.154C11.074.615 10.46 0 9.701 0H5.599C4.84 0 4.225.615 4.225 1.373V1.5A3.804 3.804 0 00.738 5.313v9.614A3.813 3.813 0 004.56 18.74h6.19a3.813 3.813 0 003.821-3.813V5.313a3.813 3.813 0 00-3.497-3.786zm-5.476-.154h4.12V2.45h-4.12V1.373zm2.099 5.078h-2.82a.678.678 0 000 1.356h2.82a.678.678 0 100-1.356zm1.978 6.822H4.877a.678.678 0 010-1.355h4.798a.678.678 0 010 1.355zm-4.798-2.647h5.548a.678.678 0 100-1.355H4.877a.678.678 0 100 1.355z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArticleBoardFilled.displayName = 'ArticleBoardFilled';
export default ArticleBoardFilled;
