import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function SearchDocumentFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.17 9.14h4.62a.56.56 0 00.39-1l-5.55-5.45a.56.56 0 00-1 .39v4.57a1.49 1.49 0 001.54 1.49z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.07 10.24h4.78a.5.5 0 01.5.5v6.92a4 4 0 01-4 4H8.46a4 4 0 01-4-4V6.5a4 4 0 014-4h2.67a.51.51 0 01.5.5v4.78a2.45 2.45 0 002.44 2.46zm-5.22 8.04a2.87 2.87 0 001.51.44l.04-.05a2.84 2.84 0 10-2.84-2.84c.002.461.119.915.34 1.32a.996.996 0 00-.13.09l-1.06 1.1a.75.75 0 00.54 1.27.7.7 0 00.54-.23l1.06-1.1z"
        fill="currentColor"
      />
      <path d="M10.36 14.53a1.35 1.35 0 10-.02 2.7 1.35 1.35 0 00.02-2.7z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchDocumentFilled.displayName = 'SearchDocumentFilled';
export default SearchDocumentFilled;
