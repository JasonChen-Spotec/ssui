import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DoubleDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4.586l5 5 5-5L18.414 6l-5.707 5.707a1 1 0 01-1.414 0L5.586 6 7 4.586zm0 7l5 5 5-5L18.414 13l-5.707 5.707a1 1 0 01-1.414 0L5.586 13 7 11.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleDownOutlined.displayName = "DoubleDownOutlined";
export default DoubleDownOutlined;
