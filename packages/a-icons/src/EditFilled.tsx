import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function EditFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.292 10.463l.007 4.247 4.238-.008L21 7.24V18a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h10.755l-7.463 7.463z"
        fill="currentCOlor"
      />
      <path
        d="M21.9 3.512l-9.193 9.192-1.411.002-.003-1.416 9.192-9.192L21.9 3.512z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EditFilled.displayName = "EditFilled";
export default EditFilled;
