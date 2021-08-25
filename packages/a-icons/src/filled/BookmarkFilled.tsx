import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function BookmarkFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M12.9 15.9l-4.1-2.2c-.5-.3-1.1-.3-1.5 0l-4.2 2.2c-.3.2-.7 0-.8-.2 0-.1-.1-.2-.1-.3V1.9C2.2.9 3.1 0 4.1 0h7.7c1.1 0 1.9.9 1.9 1.9v13.5c0 .3-.3.6-.6.6 0 0-.1 0-.2-.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BookmarkFilled.displayName = 'BookmarkFilled';
export default BookmarkFilled;
