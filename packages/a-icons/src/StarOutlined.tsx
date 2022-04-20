import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function StarOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.124 4.55A2.2 2.2 0 0112.254 3a2.2 2.2 0 012.13 1.57l.66 2a2.23 2.23 0 002.13 1.55h2.08a2.24 2.24 0 011.36 4.08l-1.71 1.25a2.23 2.23 0 00-.82 2.5l.66 2a2.25 2.25 0 01-2.18 2.95 2.22 2.22 0 01-1.31-.44l-1.64-1.25a2.24 2.24 0 00-2.64 0l-1.72 1.25a2.22 2.22 0 01-1.35.49 2.25 2.25 0 01-2.14-3l.66-2a2.23 2.23 0 00-.78-2.52l-1.71-1.25a2.24 2.24 0 011.32-4.06h2.08a2.23 2.23 0 002.13-1.57l.66-2zm2.66.52a.52.52 0 00-.53-.39.52.52 0 00-.53.43l-.66 2a3.92 3.92 0 01-3.73 2.71h-2.12a.56.56 0 00-.33 1l1.71 1.25a3.92 3.92 0 011.43 4.39l-.66 2a.5.5 0 00.07.49.63.63 0 00.49.27.56.56 0 00.33-.12l1.69-1.25c1.378-1 3.243-1 4.62 0l1.67 1.19a.56.56 0 00.33.12.63.63 0 00.47-.26.5.5 0 00.07-.49l-.66-2a3.92 3.92 0 011.43-4.39l1.71-1.24a.56.56 0 00-.33-1h-2.08a3.92 3.92 0 01-3.73-2.71l-.66-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

StarOutlined.displayName = 'StarOutlined';
export default StarOutlined;
