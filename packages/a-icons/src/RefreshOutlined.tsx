import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RefreshOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4c-2.21 0-4.21.895-5.659 2.345-.758.758-1.618 1.786-2.31 2.655H9v2H2a1 1 0 01-1-1V3h2v4.094c.602-.732 1.287-1.523 1.926-2.163A9.972 9.972 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.56 0-8.405-3.052-9.609-7.223l-.277-.96 1.921-.555.278.96A8 8 0 1012 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshOutlined.displayName = 'RefreshOutlined';
export default RefreshOutlined;
