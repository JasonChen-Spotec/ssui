import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ErrorWarningOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 14.5v-8h-2v8h2zM13 15.5v2h-2v-2h2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 110 18 9 9 0 010-18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ErrorWarningOutlined.displayName = "ErrorWarningOutlined";
export default ErrorWarningOutlined;
