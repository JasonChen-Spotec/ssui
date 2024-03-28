import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function NoteBoardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 111.5 0v2.78c0 .42-.33.76-.75.76zM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 111.5 0v2.78c0 .42-.33.76-.75.76z"
        fill="currentColor"
      />
      <path
        d="M19.57 4.5c-.66-.49-1.61-.02-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37-1.35.14-2.49-.92-2.49-2.24V4.5c0-.55-.45-1-1-1h-.92c-.55 0-1 .45-1 1v1.04c0 .79-.41 1.49-1.03 1.88-.09.06-.19.11-.29.16-.09.05-.19.09-.3.12-.12.04-.25.07-.39.08-.16.02-.32.02-.48 0-.14-.01-.27-.04-.39-.08a2.694 2.694 0 01-.59-.28c-.63-.44-1.03-1.2-1.03-2.01v-.1c0-.77-.82-1.23-1.47-.9-.01.01-.02.01-.03.02-.04.02-.07.04-.11.07-.03.03-.07.05-.1.08-.28.22-.53.47-.74.74-.11.12-.2.25-.28.38a3.498 3.498 0 00-.27.46c-.02.02-.03.03-.03.05-.06.12-.12.24-.16.37-.03.05-.04.09-.06.14-.06.15-.1.3-.14.45-.04.14-.07.29-.09.44a5.902 5.902 0 00-.06.76v8.76A4.87 4.87 0 007.37 22h9.26a4.87 4.87 0 004.87-4.87V8.37c0-1.59-.76-2.98-1.93-3.87zM12 17.42H7.36a.755.755 0 010-1.51H12c.42 0 .75.34.75.76 0 .41-.33.75-.75.75zm2.78-3.71H7.36a.755.755 0 010-1.51h7.42c.42 0 .76.34.76.76 0 .41-.34.75-.76.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

NoteBoardFilled.displayName = 'NoteBoardFilled';
export default NoteBoardFilled;
