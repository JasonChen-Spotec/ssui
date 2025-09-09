import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Foo from './index';
describe('<Foo />', function () {
  it('render Foo with dumi', function () {
    var msg = 'dumi';
    render( /*#__PURE__*/React.createElement(Foo, {
      title: msg
    }));
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});