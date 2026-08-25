import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function PeopleSettingFilled(componentProps: IconProps) {
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
        d="M17.108 12.967a.5.5 0 00-.578-.255 5.491 5.491 0 00-2.274 1.273.5.5 0 00-.108.587 1 1 0 01-.898 1.441h-.014a.5.5 0 00-.484.35 5.498 5.498 0 00-.14 2.758.5.5 0 00.538.397 1 1 0 01.864 1.64.5.5 0 00.023.669 5.498 5.498 0 002.391 1.458.5.5 0 00.62-.327 1 1 0 011.905 0 .5.5 0 00.619.327 5.498 5.498 0 002.391-1.458.5.5 0 00.022-.67 1 1 0 01.864-1.64.5.5 0 00.54-.396 5.527 5.527 0 00-.14-2.758.5.5 0 00-.485-.35h-.014a1 1 0 01-.898-1.441.5.5 0 00-.108-.587 5.491 5.491 0 00-2.274-1.273.5.5 0 00-.578.255 1 1 0 01-1.784 0zM18 19.763a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleSettingFilled.displayName = "PeopleSettingFilled";
export default PeopleSettingFilled;
