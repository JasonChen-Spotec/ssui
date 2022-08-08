import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function QuestionMarkFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM9.882 7.896c.588-.602 1.4-.896 2.436-.896.896 0 1.624.238 2.184.742.56.49.84 1.162.84 2.002 0 .686-.182 1.26-.532 1.708-.126.154-.518.518-1.176 1.092a2.325 2.325 0 00-.588.728 1.88 1.88 0 00-.224.924c0 .146-.118.238-.265.238h-.995a.238.238 0 01-.238-.238c0-.518.084-.966.28-1.33.182-.392.714-.966 1.582-1.736l.238-.266c.252-.322.392-.658.392-1.022 0-.49-.14-.868-.406-1.148-.28-.28-.686-.42-1.19-.42-.63 0-1.092.196-1.372.602a1.806 1.806 0 00-.305.698c-.089.396-.402.73-.808.73s-.744-.331-.679-.732c.111-.68.387-1.237.826-1.676zm1.456 7.574c.196-.196.448-.28.728-.28.294 0 .546.084.742.28a.93.93 0 01.294.714.993.993 0 01-.308.728c-.196.182-.448.28-.728.28-.28 0-.532-.098-.728-.294a.972.972 0 01-.294-.714.93.93 0 01.294-.714z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

QuestionMarkFilled.displayName = 'QuestionMarkFilled';
export default QuestionMarkFilled;
