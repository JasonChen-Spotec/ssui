import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BlockChainFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.92 16.75c-.33 2.66-2.51 4.84-5.17 5.17-1.61.2-3.11-.24-4.28-1.1-.67-.49-.51-1.53.29-1.77a9.486 9.486 0 006.3-6.3c.24-.79 1.28-.95 1.77-.29a6.02 6.02 0 011.09 4.29z"
        fill="currentColor"
      />
      <path
        d="M9.99 2C5.58 2 2 5.58 2 9.99s3.58 7.99 7.99 7.99 7.99-3.58 7.99-7.99C17.97 5.58 14.4 2 9.99 2zm-.94 6.87l2.41.84c.87.31 1.29.92 1.29 1.86 0 1.08-.86 1.97-1.91 1.97h-.09v.05c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.06c-1.11-.05-2-.98-2-2.14 0-.41.34-.75.75-.75s.75.34.75.75c0 .36.26.65.58.65h1.5c.23 0 .41-.21.41-.47 0-.35-.06-.37-.29-.45l-2.41-.84c-.86-.3-1.29-.91-1.29-1.86 0-1.08.86-1.97 1.91-1.97h.09v-.04c0-.41.34-.75.75-.75s.75.34.75.75v.06c1.11.05 2 .98 2 2.14 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.36-.26-.65-.58-.65h-1.5c-.23 0-.41.21-.41.47-.01.34.05.36.29.44z"
        fill="currentColor"
      />
      <ellipse cx={10} cy={10} rx={5} ry={6} fill="currentColor" />
      <circle cx={10} cy={6} r={1.5} fill="#fff" />
      <circle cx={6.5} cy={12} r={1.5} fill="#fff" />
      <circle cx={13.5} cy={12} r={1.5} fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.512l4.806 8.238H5.194L10 4.512zM7.806 11.25h4.388L10 7.488 7.806 11.25z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BlockChainFilled.displayName = 'BlockChainFilled';
export default BlockChainFilled;
