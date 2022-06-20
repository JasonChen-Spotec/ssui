import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextArea from '../index';

describe('TextArea', () => {
  it('There should be no spaces before', () => {
    const Demo = () => {
      const [val, setVal] = React.useState('');
      return <TextArea value={val} onChange={(value) => setVal(value)} />;
    };

    const { getByRole } = render(<Demo />);
    const textArea = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(textArea, { target: { value: '    light' } });
    expect(textArea.value).toBe('light');
  });

  it('has formatter', () => {
    const Demo = () => {
      const [val, setVal] = React.useState('');
      return (
        <TextArea
          value={val}
          onChange={(value) => setVal(value)}
          formatter={(value) => value.toUpperCase()}
        />
      );
    };

    const { getByRole } = render(<Demo />);
    const textArea = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(textArea, { target: { value: '    light' } });
    expect(textArea.value).toBe('LIGHT');
  });

  it('uncontrolled', () => {
    const { getByRole, rerender } = render(<TextArea />);
    const textArea = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(textArea, { target: { value: '    light' } });
    expect(textArea.value).toBe('light');
  });
});
