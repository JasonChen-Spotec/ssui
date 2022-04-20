import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ArticleBoardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.074 4.527v-.154c0-.758-.614-1.373-1.373-1.373H9.599c-.759 0-1.374.615-1.374 1.373V4.5a3.804 3.804 0 00-3.487 3.813v9.614A3.813 3.813 0 008.56 21.74h6.19a3.813 3.813 0 003.821-3.813V8.313a3.813 3.813 0 00-3.497-3.786zm-5.476-.154h4.12V5.45h-4.12V4.373zm2.098 5.078H8.878a.678.678 0 000 1.356h2.82a.678.678 0 100-1.356zm1.98 6.822H8.876a.678.678 0 010-1.355h4.798a.678.678 0 010 1.355zm-4.799-2.647h5.548a.678.678 0 100-1.355H8.877a.678.678 0 000 1.355z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArticleBoardFilled.displayName = 'ArticleBoardFilled';
export default ArticleBoardFilled;
