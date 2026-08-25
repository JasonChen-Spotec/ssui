import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FilterFileOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M16 17v2H8v-2h8zm3-6v2H5v-2h14zm3-6v2H2V5h20z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterFileOutlined.displayName = "FilterFileOutlined";
export default FilterFileOutlined;
