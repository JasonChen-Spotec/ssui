import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FilterOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 6a2 2 0 100 4 2 2 0 000-4zm-3.874 1A4.002 4.002 0 0122 8a4 4 0 01-7.874 1H2V7h12.126zM6 14a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 017.874-1H22v2H9.874A4.002 4.002 0 012 16z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterOutlined.displayName = "FilterOutlined";
export default FilterOutlined;
