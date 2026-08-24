import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ArrowDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7.586l6 6 6-6L19.414 9l-6.707 6.707a1 1 0 01-1.414 0L4.586 9 6 7.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ArrowDownOutlined.displayName = "ArrowDownOutlined";
export default ArrowDownOutlined;
