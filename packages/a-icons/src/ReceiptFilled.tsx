import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ReceiptFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.667 2.667h-1c-3 0-4 1.739-4 3.886V21.13c0 .806.94 1.263 1.6.777l1.71-1.244c.4-.291.96-.252 1.32.098l1.66 1.622c.39.38 1.03.38 1.42 0l1.68-1.632c.35-.34.91-.38 1.3-.088l1.71 1.244c.66.476 1.6.02 1.6-.777V4.609c0-1.068.9-1.942 2-1.942h-11zm-.43 5.859c.55 0 1 .437 1 .972 0 .534-.45.971-1 .971s-1-.437-1-.971c0-.535.45-.972 1-.972zm4.86 5.879c-.56 0-1-.438-1-.972s.45-.972 1-.972 1 .438 1 .972-.45.972-1 .972zm.83-5.13l-5.46 5.304a.753.753 0 01-.53.214.753.753 0 01-.53-.213.718.718 0 010-1.03l5.46-5.306a.77.77 0 011.06 0c.29.282.29.748 0 1.03z"
        fill="currentColor"
      />
      <path
        d="M17.787 2.667V4c.587 0 1.146.24 1.555.64.427.435.658.995.658 1.582v2.151c0 .658-.293.96-.96.96h-1.706v-4.88c0-.249.204-.453.453-.453V2.667zm0 0c-.987 0-1.787.8-1.787 1.786v6.213h3.04c1.405 0 2.294-.888 2.294-2.293v-2.15c0-.979-.4-1.868-1.04-2.516a3.595 3.595 0 00-2.507-1.04c.009 0 0 0 0 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ReceiptFilled.displayName = 'ReceiptFilled';
export default ReceiptFilled;
