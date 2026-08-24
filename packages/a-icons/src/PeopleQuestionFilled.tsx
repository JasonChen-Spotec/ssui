import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function PeopleQuestionFilled(componentProps: IconProps) {
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
        d="M12.5 18a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zm5.5-3.9a2.15 2.15 0 00-2.15 2.15h1.3a.85.85 0 11.85.85.65.65 0 00-.65.65v1h1.3v-.45a2.151 2.151 0 00-.65-4.2zm.75 5.65v1.5h-1.5v-1.5h1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleQuestionFilled.displayName = "PeopleQuestionFilled";
export default PeopleQuestionFilled;
