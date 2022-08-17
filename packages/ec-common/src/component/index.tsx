import React from 'react';
import { useIntl } from 'react-intl';
import messages from '../intl/messages';

export default ({ title }: { title: string }) => {
  const { formatMessage } = useIntl();

  return (
    <h1>
      {title}
      <div>{formatMessage(messages.login)}</div>
    </h1>
  );
};
