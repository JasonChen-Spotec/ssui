import * as React from "react";
import Icon from "assui/lib/components/Icon";

function DownloadFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M16 11.4v3.1c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H.9c-.3 0-.5-.1-.7-.3-.1-.3-.2-.5-.2-.7v-3.1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h4.5l1.3 1.3c.4.4.8.5 1.3.5s.9-.2 1.3-.5l1.3-1.3h4.5c.3 0 .5.1.7.3 0 .2.1.4.1.7zm-3.1-5.5c.1.3.1.5-.1.7l-4.3 4.3c-.2.1-.3.2-.5.2s-.3-.1-.4-.2L3.3 6.6c-.2-.2-.3-.4-.2-.7.1-.2.3-.4.6-.4h2.5V1.2c0-.2.1-.3.2-.4s.3-.2.4-.2h2.5c.2 0 .3.1.4.2s.2.3.2.4v4.3h2.5c.2 0 .4.2.5.4zm-.8 8.1c.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.4-.1-.1-.3-.2-.4-.2-.2 0-.3.1-.4.2s-.2.3-.2.4c0 .2.1.3.2.4s.3.2.4.2c.2 0 .3-.1.4-.2zm2.5 0c.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.4-.1-.1-.3-.2-.4-.2s-.3.1-.4.2c-.1.1-.2.3-.2.4 0 .2.1.3.2.4.1.1.3.2.4.2.1 0 .3-.1.4-.2z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DownloadFilled.displayName = "DownloadFilled";
export default DownloadFilled;
