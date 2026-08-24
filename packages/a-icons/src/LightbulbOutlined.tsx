import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function LightbulbOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 22h5M10 10h4m-2 0v6m3-.674a7 7 0 10-6 0V16c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.082C10.602 19 11.068 19 12 19c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C15 17.398 15 16.932 15 16v-.674z"
        stroke="currentCOlor"
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LightbulbOutlined.displayName = "LightbulbOutlined";
export default LightbulbOutlined;
