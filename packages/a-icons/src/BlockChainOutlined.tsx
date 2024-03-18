import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BlockChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.99 17.98A7.99 7.99 0 109.99 2a7.99 7.99 0 000 15.98zM12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={9.95} cy={6.25} r={1.75} fill="currentColor" />
      <circle cx={6.25} cy={12.25} r={1.75} fill="currentColor" />
      <circle cx={13.75} cy={12.25} r={1.75} fill="currentColor" />
      <path d="M6.5 12L10 6l3.5 6h-7z" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BlockChainOutlined.displayName = 'BlockChainOutlined';
export default BlockChainOutlined;
