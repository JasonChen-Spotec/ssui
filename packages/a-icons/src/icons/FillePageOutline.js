import * as React from 'react';
import Icon from 'assui/lib/Icon';

function FillePageOutline(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M5 9.14h2.12a.38.38 0 100-.76H5a.38.38 0 100 .76zM8.25 8.76a.38.38 0 00.38.38h1.92a.38.38 0 000-.76H8.63a.38.38 0 00-.38.38zM5 11.05h3.77a.38.38 0 100-.76H5a.38.38 0 000 .76zM5.77 7.24h2.28A1.14 1.14 0 009.19 6.1V5a1.14 1.14 0 00-1.14-1.19H5.77A1.14 1.14 0 004.62 5v1.1a1.14 1.14 0 001.15 1.14zM5.38 5a.39.39 0 01.39-.38h2.28a.38.38 0 01.38.38v1.1a.38.38 0 01-.38.38H5.77a.39.39 0 01-.39-.38z"
      />
      <path
        fill="currentColor"
        d="M13.38 12.19V3A2.21 2.21 0 0011.22.76H9.89A1.15 1.15 0 008.81 0H6.15a1.15 1.15 0 00-1.08.76H3.74A2.21 2.21 0 001.57 3v10.76A2.21 2.21 0 003.48 16H13a1.72 1.72 0 001.91-1.9v-1.91zM6.15.76h2.66a.38.38 0 010 .76H6.15a.38.38 0 110-.76zm-3.81 13V3a1.44 1.44 0 011.4-1.48h1.33a1.15 1.15 0 001.08.77h2.66a1.15 1.15 0 001.08-.77h1.33A1.45 1.45 0 0112.62 3v9.19h-8v1.91c0 .74-.3 1.08-1 1.13a1.45 1.45 0 01-1.28-1.47zm11.81.34c0 .8-.35 1.14-1.15 1.14H5.11a2.19 2.19 0 00.27-1.14V13h8.77z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FillePageOutline.displayName = 'FillePageOutline';
export default FillePageOutline;
