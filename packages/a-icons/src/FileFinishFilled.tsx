import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FileFinishFilled(componentProps: IconProps) {
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
        d="M15 9h6v8.241c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 18.71 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1H13v6a2 2 0 002 2zm-3.293 9.707l5.207-5.207-1.414-1.414-4.5 4.5-2-2L7.586 16l2.707 2.707a1 1 0 001.414 0z"
        fill="currentColor"
      />
      <path d="M15 1.586L20.414 7H15V1.586z" fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileFinishFilled.displayName = "FileFinishFilled";
export default FileFinishFilled;
