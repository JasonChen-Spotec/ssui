import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function RelationInternal(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.042 3.67a2.462 2.462 0 00-2.437 2.82 5.885 5.885 0 00-3.483 5.772 2.461 2.461 0 102.332 4.309 5.86 5.86 0 003.54 1.182c1.33 0 2.56-.442 3.545-1.188a2.461 2.461 0 102.326-4.309A5.884 5.884 0 0014.47 7.53a2.462 2.462 0 00-2.429-2.86zm-2.037 3.846a2.46 2.46 0 004.049.034 4.785 4.785 0 012.719 4.527 2.462 2.462 0 00-1.983 3.674 4.762 4.762 0 01-2.797.902 4.762 4.762 0 01-2.787-.895 2.463 2.463 0 00-1.993-3.682 4.785 4.785 0 012.792-4.56zM7.07 14.173a1.361 1.361 0 110 2.723 1.361 1.361 0 010-2.723zm9.86 0a1.36 1.36 0 11-.001 2.721 1.36 1.36 0 010-2.721zM12.042 5.77a1.36 1.36 0 11-.001 2.722 1.36 1.36 0 01.001-2.722z"
        fill="#47A92A"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RelationInternal.displayName = "RelationInternal";
export default RelationInternal;
