import React from 'react';
import { useIntl } from 'react-intl';
import messages from '../intl/messages';
import LangSelect from './LangSelect';
import { EN } from '../consts/langType';

export default ({ title }: { title: string }) => {
  const { formatMessage } = useIntl();

  return (
    <h1>
      {title}
      <div>{formatMessage(messages.female)}</div>
      <LangSelect defaultValue={EN} onChange={(v) => console.log(v)} />
    </h1>
  );
};
