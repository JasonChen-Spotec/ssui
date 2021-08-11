import * as React from 'react';
import Icon from 'assui/lib/icon';

function SquaresFilled(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M1.1 10.2C.5 10.2 0 9.7 0 9.1V1.8C0 .8.9 0 1.9 0h4.2c.6 0 1.1.5 1.1 1.1V9c0 .6-.5 1.1-1.1 1.1 0 .1-5 .1-5 .1zm13.7-2.9h-5c-.6 0-1.1-.5-1.1-1.1v-5C8.7.5 9.2 0 9.8 0H14c1.1 0 1.9.9 1.9 1.9v4.2c.1.7-.4 1.2-1.1 1.2M1.9 16c-1 0-1.9-.8-1.9-1.9v-1.3c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v2.1c0 .6-.5 1.1-1.1 1.1H1.9zM14 16H9.8c-.6 0-1.1-.5-1.1-1.1v-5c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v4.2c.1 1-.8 1.9-1.9 1.9"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SquaresFilled.displayName = 'SquaresFilled';
export default SquaresFilled;
