import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function StopOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.968 6.382a9 9 0 0012.65 12.65L4.968 6.382zM3.547 4.961A10.955 10.955 0 001 12c0 6.075 4.925 11 11 11 2.678 0 5.132-.957 7.04-2.547l.03.031.578-.578c.087-.084.174-.17.258-.258l.578-.578-.03-.03A10.956 10.956 0 0023 12c0-6.075-4.925-11-11-11-2.678 0-5.132.957-7.04 2.547l-.03-.031-.578.578c-.087.084-.174.17-.258.258l-.578.578.03.03zm2.835.007l12.65 12.65a9 9 0 00-12.65-12.65z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StopOutlined.displayName = "StopOutlined";
export default StopOutlined;
