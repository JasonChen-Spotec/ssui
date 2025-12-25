import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RiskControlFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.286 1.089a2 2 0 00-.572 0c-.219.031-.422.108-.584.169l-.043.016-5.493 2.06c-.617.23-1.16.433-1.578.801a3 3 0 00-.82 1.184c-.198.52-.197 1.1-.196 1.76V12c0 2.827 1.537 5.183 3.199 6.914 1.673 1.743 3.587 2.974 4.599 3.565l.04.024c.186.108.425.249.742.317.26.055.58.055.84 0a2.42 2.42 0 00.74-.317l.042-.024c1.012-.59 2.926-1.822 4.599-3.565C19.463 17.184 21 14.827 21 12V7.078c0-.66.002-1.238-.196-1.759a3 3 0 00-.82-1.184c-.419-.368-.961-.57-1.579-.801l-5.492-2.06-.044-.016a2.785 2.785 0 00-.583-.17zm2.161 10.517l-2.759-1.38L14.414 7.5 13 6.086 9.293 9.793a1 1 0 00.26 1.602l2.759 1.379L9.586 15.5 11 16.914l3.707-3.707a1 1 0 00-.26-1.601z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RiskControlFilled.displayName = 'RiskControlFilled';
export default RiskControlFilled;
