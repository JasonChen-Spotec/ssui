import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DotsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.999 5a.833.833 0 100-1.666.833.833 0 000 1.667zM9.999 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM9.999 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM15.832 5a.833.833 0 100-1.666.833.833 0 000 1.667zM15.832 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM15.832 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM4.165 5a.833.833 0 100-1.666.833.833 0 000 1.667zM4.165 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM4.165 16.667a.833.833 0 100-1.666.833.833 0 000 1.666z"
        stroke="currentColor"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DotsOutlined.displayName = "DotsOutlined";
export default DotsOutlined;
