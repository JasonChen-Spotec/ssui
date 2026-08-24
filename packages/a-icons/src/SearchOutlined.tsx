import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function SearchOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a9 9 0 105.36 16.231l3.682 3.683 1.414-1.414-3.632-3.632A9 9 0 0011 2zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SearchOutlined.displayName = "SearchOutlined";
export default SearchOutlined;
