import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ListCaptionOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.5h12v2H2v-2zm0 7h20v2H2v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ListCaptionOutlined.displayName = "ListCaptionOutlined";
export default ListCaptionOutlined;
