import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function OffOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3v9h-2V3h2zM7.044 6.64l-.707.707a8 8 0 1011.316 0l-.707-.707 1.414-1.414.707.707a10 10 0 11-14.144 0l.707-.707L7.044 6.64z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OffOutlined.displayName = "OffOutlined";
export default OffOutlined;
