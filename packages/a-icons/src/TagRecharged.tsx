import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function TagRecharged(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.32 6.087c0 2.459 4.203 4.45 9.387 4.45s9.387-1.991 9.387-4.45c0-2.458-4.203-4.45-9.387-4.45S2.32 3.628 2.32 6.086zm9.387 6.497c-3.834 0-7.132-1.09-8.587-2.654-.514.551-.8 1.16-.8 1.8 0 2.46 4.203 4.451 9.387 4.451s9.387-1.992 9.387-4.45c0-.64-.286-1.25-.8-1.798-1.455 1.56-4.753 2.65-8.587 2.65zm0 5.416c-3.884 0-7.216-1.118-8.644-2.714-.478.534-.743 1.12-.743 1.737 0 2.458 4.203 4.45 9.387 4.45s9.387-1.992 9.387-4.45c0-.617-.265-1.203-.743-1.737C18.923 16.88 15.59 18 11.707 18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TagRecharged.displayName = "TagRecharged";
export default TagRecharged;
