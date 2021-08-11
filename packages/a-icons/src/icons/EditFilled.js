import * as React from 'react';
import Icon from 'assui/lib/Icon';

function EditFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8.8 3.4L12.3 7l-8.8 9H0v-3.6l8.8-9zm1-1l2-2.1c.4-.4 1-.4 1.4 0l2.1 2.2c.4.4.4 1 0 1.4l-2 2.1-3.5-3.6zM8.4 14H15c.6 0 1 .4 1 1s-.4 1-1 1H7.4c-.3 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l.7-.7c.2-.2.4-.3.7-.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EditFilled.displayName = 'EditFilled';
export default EditFilled;
