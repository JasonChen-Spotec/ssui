import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ConfirmCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.914-3l-6.707 6.707a1 1 0 01-1.414 0L6.086 12 7.5 10.586l3 3 6-6L17.914 9z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ConfirmCircleOutlined.displayName = "ConfirmCircleOutlined";
export default ConfirmCircleOutlined;
