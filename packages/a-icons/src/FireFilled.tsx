import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FireFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.057 0l-1.566 3.186a22.35 22.35 0 01-4.434 6.12l-.205.194A6.063 6.063 0 004 13.79v.204a7.804 7.804 0 004.8 7.27l.297.126a7.734 7.734 0 006.023 0h.068A7.963 7.963 0 0020 13.983V9.045a9.84 9.84 0 01-5.016 5.029h-.069c-.069 0-.869.33-1.211 0a.862.862 0 01-.069-1.138l.08-.057h.057a6.171 6.171 0 001.394-8.385C13.68 2.241 12.057 0 12.057 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FireFilled.displayName = 'FireFilled';
export default FireFilled;
