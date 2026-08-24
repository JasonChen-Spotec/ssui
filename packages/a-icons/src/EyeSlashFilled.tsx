import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function EyeSlashFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.52 5.934L1.393 2.808l1.414-1.415 19.8 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0112 21c-5.392 0-9.878-3.88-10.819-9A10.982 10.982 0 014.52 5.934zm10.237 10.238l-1.464-1.464a3 3 0 01-4.001-4.001L7.828 9.243a5 5 0 006.929 6.93zM7.974 3.76C9.221 3.27 10.579 3 12 3c5.392 0 9.878 3.88 10.818 9a10.947 10.947 0 01-2.012 4.592l-3.86-3.86a5 5 0 00-5.68-5.68L7.975 3.761z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EyeSlashFilled.displayName = "EyeSlashFilled";
export default EyeSlashFilled;
