import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleEllipsisFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.78 11.17h-.996a3.988 3.988 0 01-3.988-3.988V4.55a3.34 3.34 0 013.35-3.35h2.273a3.34 3.34 0 013.35 3.35v2.632a3.988 3.988 0 01-3.988 3.987z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.957 12.831h-7.07a3.28 3.28 0 00-3.161 2.702l-.24 1.136a3.38 3.38 0 003.17 4.137h5.761a6.618 6.618 0 01-.71-2.99 6.63 6.63 0 012.25-4.985z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.354 22.8a4.985 4.985 0 100-9.969 4.985 4.985 0 000 9.97zm2.492-4.154a.83.83 0 100-1.661.83.83 0 000 1.661zm-4.154-.83a.83.83 0 11-1.661 0 .83.83 0 011.661 0zm1.662.83a.83.83 0 100-1.661.83.83 0 000 1.661z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleEllipsisFilled.displayName = 'PeopleEllipsisFilled';
export default PeopleEllipsisFilled;
