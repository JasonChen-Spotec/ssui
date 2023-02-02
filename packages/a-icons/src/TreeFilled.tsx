import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TreeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.333 14.063a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.124zM19.333 6.73a2.062 2.062 0 100-4.126 2.062 2.062 0 000 4.125zM19.333 21.396a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zM4.667 14.063a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.124z"
        fill="currentColor"
      />
      <path
        d="M18.417 12.688a.692.692 0 00.687-.688.693.693 0 00-.687-.688H11.77V7.418c0-1.449.614-2.063 2.062-2.063h4.584a.693.693 0 00.687-.687.693.693 0 00-.687-.688h-4.584c-2.218 0-3.437 1.22-3.437 3.438v3.896H5.583a.693.693 0 00-.687.687c0 .376.312.688.687.688h4.813v3.895c0 2.219 1.219 3.438 3.437 3.438h4.584a.693.693 0 00.687-.688.692.692 0 00-.687-.687h-4.584c-1.448 0-2.062-.614-2.062-2.063v-3.895h6.646z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TreeFilled.displayName = 'TreeFilled';
export default TreeFilled;
