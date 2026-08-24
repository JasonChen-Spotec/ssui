import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function PeopleCloseFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM11.655 14H7a5 5 0 00-5 5v3h9.655a7.464 7.464 0 01-1.155-4c0-1.47.423-2.842 1.155-4z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm2.475 4.086L19.06 18l1.414 1.414-1.06 1.06L18 19.062l-1.414 1.414-1.06-1.06L16.938 18l-1.414-1.414 1.06-1.06L18 16.938l1.414-1.414 1.06 1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleCloseFilled.displayName = "PeopleCloseFilled";
export default PeopleCloseFilled;
