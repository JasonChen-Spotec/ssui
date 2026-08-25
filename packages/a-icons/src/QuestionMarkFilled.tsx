import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function QuestionMarkFilled(componentProps: IconProps) {
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
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm-1-6v-2h2v2h-2zm4.5-7a3.502 3.502 0 01-2.5 3.355V14h-2v-1.5a1 1 0 011-1 1.5 1.5 0 10-1.471-1.794l-1.962-.393A3.501 3.501 0 0115.5 10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

QuestionMarkFilled.displayName = "QuestionMarkFilled";
export default QuestionMarkFilled;
