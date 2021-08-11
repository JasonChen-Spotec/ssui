import * as React from 'react';
import Icon from 'assui/lib/icon';

function ShrinkFilled(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        d="M9.18 7.09a.33.33 0 00.23.09H12a.36.36 0 100-.72h-1.77l2.18-2.36a.37.37 0 000-.51.37.37 0 00-.51 0L9.79 5.9V4.23a.37.37 0 00-.37-.36.36.36 0 00-.36.36v2.6a.35.35 0 00.12.26zm-3.41-.61H4a.36.36 0 00-.36.36.35.35 0 00.36.35h2.57a.31.31 0 00.25-.1.38.38 0 00.12-.27V4.23a.36.36 0 00-.36-.36.36.36 0 00-.36.36V5.9l-2.1-2.28a.35.35 0 10-.53.47l2.18 2.39zm1.32 2.7a.37.37 0 00-.26-.12h-2.6a.36.36 0 00-.36.36.36.36 0 00.36.36H5.9l-2.29 2.1a.37.37 0 000 .51.36.36 0 00.5 0l2.38-2.18V12a.36.36 0 00.72 0V9.43a.33.33 0 00-.09-.23zm5.3 2.7L10.1 9.79h1.67a.37.37 0 00.36-.37.36.36 0 00-.36-.36h-2.6a.35.35 0 00-.28.14.33.33 0 00-.09.23V12a.36.36 0 00.36.36.36.36 0 00.36-.36v-1.77l2.38 2.18a.36.36 0 00.49-.53z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShrinkFilled.displayName = 'ShrinkFilled';
export default ShrinkFilled;
