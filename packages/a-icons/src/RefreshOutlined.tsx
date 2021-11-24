import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function RefreshOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.512 4.021l.76-.76a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 001.06-1.06l-.66-.66a7.23 7.23 0 11-5.79 1.86.75.75 0 00-1-1.1 8.75 8.75 0 106.7-2.28h-.01z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshOutlined.displayName = 'RefreshOutlined';
export default RefreshOutlined;
