import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RelationCircle(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm4.011 4.29c-.641 0-1.187.409-1.39.98h-2.539c-1.584 0-2.455.872-2.455 2.457v2.782h-2.7a1.474 1.474 0 10-.002.983h2.702v2.782c0 1.584.87 2.456 2.455 2.456h2.54a1.473 1.473 0 100-.983h-2.54c-1.034 0-1.473-.439-1.473-1.473v-2.782h4.013a1.474 1.474 0 100-.983h-4.013V8.727c0-1.035.439-1.474 1.473-1.474h2.54a1.474 1.474 0 101.39-1.964z"
        fill="#47A92A"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RelationCircle.displayName = 'RelationCircle';
export default RelationCircle;
