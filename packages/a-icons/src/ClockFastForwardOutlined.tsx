import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ClockFastForwardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4a8 8 0 106.223 13.028l.629-.777 1.554 1.258-.629.777A9.983 9.983 0 0111 22C5.477 22 1 17.523 1 12S5.477 2 11 2c5.134 0 9.365 3.87 9.935 8.851l.765-.765 1.414 1.414-2.706 2.707a1 1 0 01-1.415 0L16.287 11.5l1.414-1.414 1.275 1.274A8 8 0 0011 4zm1 2v5.465l3.387 2.258-1.11 1.664-3.832-2.555A1 1 0 0110 12V6h2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClockFastForwardOutlined.displayName = "ClockFastForwardOutlined";
export default ClockFastForwardOutlined;
