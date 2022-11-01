import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DownloadOutlinedFile(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 9.19l-7-7A.79.79 0 0012 2H9a4.75 4.75 0 00-4.75 4.75v10A4.75 4.75 0 009 21.5h6a4.75 4.75 0 004.75-4.75v-7a.79.79 0 00-.22-.56zm-6.78-4.65L17.21 9H14c-.69 0-1.25-.56-1.25-1.25V4.54zm-7 12.21A3.26 3.26 0 009 20h6a3.26 3.26 0 003.25-3.25V10.5H14a2.75 2.75 0 01-2.75-2.75V3.5H9a3.26 3.26 0 00-3.25 3.25v10z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.95 11.35a.65.65 0 01.65.65v4.5a.65.65 0 11-1.3 0V12a.65.65 0 01.65-.65z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.39 14.662a.65.65 0 01.92 0l1.661 1.661 1.662-1.661a.65.65 0 01.92.919l-2.582 2.58-2.58-2.58a.65.65 0 010-.92z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DownloadOutlinedFile.displayName = 'DownloadOutlinedFile';
export default DownloadOutlinedFile;
