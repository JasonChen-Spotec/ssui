import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function TagFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.53 2.53l8.45 8.45a2.36 2.36 0 01-.35 3.28l-6.37 6.37a2.36 2.36 0 01-3.28.35l-8.45-8.45a1.87 1.87 0 01-.52-1.49l.44-6a2.9 2.9 0 012.59-2.59l6-.44a1.87 1.87 0 011.49.52zM7.68 9.107c.377 0 .739-.155 1-.429a1.38 1.38 0 000-2 1.414 1.414 0 00-2 2c.26.274.621.43 1 .43z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TagFilled.displayName = 'TagFilled';
export default TagFilled;
