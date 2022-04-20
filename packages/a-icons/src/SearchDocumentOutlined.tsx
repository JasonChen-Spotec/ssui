import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SearchDocumentOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.08 15.021A3.91 3.91 0 018.51 13a3.91 3.91 0 11-2.36 7.07L4.7 21.58a.78.78 0 01-.54.23.73.73 0 01-.52-.21.75.75 0 010-1.06L5.09 19h.11a3.91 3.91 0 01-.12-3.979zM6.1 16.91a2.41 2.41 0 002.41 2.41v-.03a2.41 2.41 0 002.41-2.38 2.41 2.41 0 00-4.82 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.35 2.38l7 7a.75.75 0 01.27.56v7a4.75 4.75 0 01-4.75 4.75H13a.75.75 0 010-1.5h2.82a3.25 3.25 0 003.25-3.25v-6.25h-4.25a2.76 2.76 0 01-2.75-2.75V3.69H9.82a3.26 3.26 0 00-3.25 3.25v5a.75.75 0 01-1.5 0v-5a4.75 4.75 0 014.75-4.78h3c.199 0 .39.08.53.22zm.22 2.34v3.22c0 .69.56 1.25 1.25 1.25H18l-4.43-4.47z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchDocumentOutlined.displayName = 'SearchDocumentOutlined';
export default SearchDocumentOutlined;
