import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CalendarFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3V1H7v2.002c-.475.003-.891.013-1.252.042-.562.046-1.079.145-1.564.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.29 2 7.954 2 8.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C6.29 23 6.954 23 7.758 23h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392-.361-.03-.776-.04-1.252-.042V1h-2v2H9zM5.911 5.038c.294-.024.643-.033 1.089-.036V7h2V5h6v2h2V5.002c.445.003.795.012 1.089.036.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C20 7.361 20 7.943 20 8.8V9H4v-.2c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CalendarFilled.displayName = 'CalendarFilled';
export default CalendarFilled;
