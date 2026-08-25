import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function CloseOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4.586l6 6 6-6L19.414 6l-6 6 6 6L18 19.414l-6-6-6 6L4.586 18l6-6-6-6L6 4.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseOutlined.displayName = "CloseOutlined";
export default CloseOutlined;
