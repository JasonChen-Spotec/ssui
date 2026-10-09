import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DragDotOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 3h3v3h-3V3zm6 0h3v3h-3V3zm-6 7.5h3v3h-3v-3zm6 0h3v3h-3v-3zm-6 7.5h3v3h-3v-3zm6 0h3v3h-3v-3z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DragDotOutlined.displayName = "DragDotOutlined";
export default DragDotOutlined;
