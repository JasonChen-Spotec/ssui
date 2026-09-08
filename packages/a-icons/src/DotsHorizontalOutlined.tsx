import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DotsHorizontalOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 10.5h3v3H3zM10.5 10.5h3v3h-3zM18 10.5h3v3h-3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DotsHorizontalOutlined.displayName = "DotsHorizontalOutlined";
export default DotsHorizontalOutlined;
