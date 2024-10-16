import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LoadingFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.208 6.48l2.904 2.904c.36.36.912.36 1.272 0a.884.884 0 000-1.272L6.48 5.208a.884.884 0 00-1.272 0c-.36.36-.336.912 0 1.272zm-1.92 6.408h4.104A.886.886 0 008.28 12a.902.902 0 00-.888-.888H3.288A.886.886 0 002.4 12c0 .48.408.888.888.888zm3.192 5.904l2.904-2.904a.884.884 0 000-1.272.884.884 0 00-1.272 0L5.208 17.52a.884.884 0 000 1.272.929.929 0 001.272 0zm6.408 1.92v-4.104A.886.886 0 0012 15.72a.902.902 0 00-.888.888v4.104c0 .504.408.888.888.888.48 0 .888-.408.888-.888zm5.904-3.192l-2.904-2.904a.884.884 0 00-1.272 0 .884.884 0 000 1.272l2.904 2.904c.36.36.912.36 1.272 0a.929.929 0 000-1.272zm1.92-6.408h-4.104a.886.886 0 00-.888.888c0 .48.408.888.888.888h4.104A.886.886 0 0021.6 12a.902.902 0 00-.888-.888zM17.52 5.208l-2.904 2.904a.884.884 0 000 1.272c.36.36.912.36 1.272 0l2.904-2.904a.884.884 0 000-1.272.929.929 0 00-1.272 0zm-6.408-1.92v4.104c0 .504.408.888.888.888.48 0 .888-.408.888-.888V3.288A.886.886 0 0012 2.4a.902.902 0 00-.888.888z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LoadingFilled.displayName = 'LoadingFilled';
export default LoadingFilled;
