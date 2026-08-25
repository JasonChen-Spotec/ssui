import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DownloadLineOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#download-line-outlined_svg__clip0_18321_25544)">
        <path
          d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="download-line-outlined_svg__clip0_18321_25544">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DownloadLineOutlined.displayName = "DownloadLineOutlined";
export default DownloadLineOutlined;
