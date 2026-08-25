import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ImacFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.161 2H18.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.678c0 .527 0 .981-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H16.28l.69 2.758A1 1 0 0116 22H8a1 1 0 01-.97-1.242L7.72 18H5.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167C1 14.82 1 14.365 1 13.838V6.162c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C4.18 2 4.635 2 5.161 2zM5.2 16c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 01-.437-.437c-.025-.05-.063-.15-.085-.422A13.93 13.93 0 013 14h18c0 .465-.004.783-.024 1.032-.022.272-.06.373-.085.422a1 1 0 01-.437.437c-.05.025-.15.063-.422.085C19.75 16 19.377 16 18.8 16H5.2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImacFilled.displayName = "ImacFilled";
export default ImacFilled;
