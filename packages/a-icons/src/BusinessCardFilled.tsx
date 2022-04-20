import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BusinessCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V5a2 2 0 00-2-2H2zm5.004 3.8H6.46c-1.177.021-2.12.981-2.12 2.158v.659a2.435 2.435 0 104.87 0v-.659A2.167 2.167 0 007.004 6.8zm.736 2.817a1.002 1.002 0 11-2.005 0v-.659c0-.4.325-.725.725-.725h.544c.403 0 .73.323.736.725v.659zm2.596 4.535a1.986 1.986 0 00-1.909-1.604h-3.38a1.976 1.976 0 00-1.91 1.604l-.095.44a2.062 2.062 0 00.43 1.727c.362.453.91.716 1.49.716h3.541a1.91 1.91 0 001.5-.716 2.09 2.09 0 00.42-1.728l-.087-.44zm-1.441 1.26a.544.544 0 01-.392.191H4.961a.496.496 0 01-.382-.19.601.601 0 01-.124-.536l.086-.439a.544.544 0 01.506-.458h3.37a.554.554 0 01.516.458l.086.44a.668.668 0 01-.124.534zM12.8 9a.7.7 0 01.7-.7h7a.7.7 0 110 1.4h-7a.7.7 0 01-.7-.7zm.7 2.3a.7.7 0 100 1.4h7a.7.7 0 100-1.4h-7zm-.7 3.7a.7.7 0 01.7-.7h7a.7.7 0 110 1.4h-7a.7.7 0 01-.7-.7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BusinessCardFilled.displayName = 'BusinessCardFilled';
export default BusinessCardFilled;
