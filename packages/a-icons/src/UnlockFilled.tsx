import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function UnlockFilled(componentProps: IconProps) {
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
        d="M12 2a6 6 0 00-6 6v1.15a3.364 3.364 0 00-.816.286 4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 13.29 3 13.954 3 14.758v1.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C7.29 22 7.954 22 8.758 22h6.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01v-1.483c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C16.71 9 16.046 9 15.242 9H8.758C8.49 9 8.238 9 8 9.002V8a4 4 0 017.668-1.6l.4.917 1.833-.801-.4-.916A6.001 6.001 0 0012 2zm-1 11.5v4h2v-4h-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UnlockFilled.displayName = "UnlockFilled";
export default UnlockFilled;
