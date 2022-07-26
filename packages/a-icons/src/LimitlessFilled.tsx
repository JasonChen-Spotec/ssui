import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LimitlessFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" fill="currentColor" />
      <path
        d="M15.574 9c-.224 0-.46.027-.704.08-1.143.25-2.016 1.31-2.843 2.403-.835-1.099-1.72-2.154-2.898-2.403-.942-.2-1.741-.006-2.311.559-.535.53-.818 1.345-.818 2.354 0 1.019.29 1.84.837 2.376.575.563 1.369.748 2.295.537 1.17-.267 2.055-1.359 2.895-2.474.829 1.1 1.697 2.188 2.836 2.473.9.225 1.708.047 2.279-.5.553-.532.858-1.389.858-2.412 0-1.015-.285-1.832-.824-2.364-.422-.417-.968-.629-1.602-.629zm-3.19 2.958c.808-1.072 1.59-2.04 2.582-2.257.777-.17 1.423-.026 1.869.413.413.408.632 1.058.632 1.88 0 .84-.229 1.504-.661 1.92-.45.432-1.083.56-1.833.373-.992-.248-1.774-1.246-2.589-2.33zm-3.964 2.4c-.497 0-.92-.16-1.244-.476-.42-.412-.643-1.065-.643-1.889 0-.816.217-1.463.627-1.87.445-.441 1.094-.587 1.875-.422 1.028.218 1.822 1.182 2.635 2.257-.824 1.096-1.62 2.095-2.638 2.328a2.757 2.757 0 01-.612.073z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LimitlessFilled.displayName = 'LimitlessFilled';
export default LimitlessFilled;
