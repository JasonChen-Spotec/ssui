import * as React from "react";
import Icon from "assui/lib/components/Icon";

function HomeFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8.9.3c-.5-.4-1.2-.4-1.7 0L.2 7c-.3.2-.3.6 0 .9.2.3.6.3.9 0l.1-.1v6.9c0 .7.6 1.3 1.3 1.3h3.7v-3.9c0-.5.4-.9.9-.9h1.8c.5 0 .9.4.9.9V16h3.8c.7 0 1.3-.6 1.3-1.3V7.9c.3.3.7.2.9 0 .2-.3.2-.7 0-.9L8.9.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeFilled.displayName = "HomeFilled";
export default HomeFilled;
