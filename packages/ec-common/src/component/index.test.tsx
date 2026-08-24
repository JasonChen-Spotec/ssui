import '@testing-library/jest-dom';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import Foo from './index';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(
      <IntlProvider locale="zh" messages={{ female: '女' }}>
        <Foo title={msg} />
      </IntlProvider>,
    );
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
