import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelAutoComplete from '../index';

const baseProps = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
};

describe('LabelAutoComplete', () => {
  it('LabelAutoComplete base test', async () => {
    const TestComponet = (props: any) => {
      const [options, setOptions] = React.useState<any[]>([
        { value: 'Burns Bay Road', disabled: true },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ]);
      return <LabelAutoComplete label="我是标题" options={options} {...props} />;
    };

    const { container, getByTitle, getByRole } = render(<TestComponet {...baseProps} />);

    const labelNode = container.querySelector('.label-auto-complete-text') as HTMLLabelElement;
    const input = getByRole('combobox') as HTMLInputElement;

    expect(labelNode).toHaveTextContent('我是标题');

    await waitFor(() => {
      fireEvent.click(labelNode);
    });

    expect(container.querySelector('.ant-select-open')).toBeTruthy();

    await waitFor(() => {
      fireEvent.click(getByTitle('Downing Street'));
    });

    expect(container.querySelector('.ant-select-open')).toBeFalsy();
    expect(input.value).toBe('Downing Street');
    expect(baseProps.onChange).toBeCalledWith('Downing Street', [
      { value: 'Burns Bay Road', disabled: true },
      { value: 'Downing Street' },
      { value: 'Wall Street' },
    ]);

    fireEvent.blur(input);

    expect(baseProps.onBlur).toBeCalled();
    expect(baseProps.onBlur).toBeCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: 'Downing Street' }) }),
    );

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);

    expect(container.querySelector('.ant-select-open')).toBeFalsy();
  });

  it('when no option enter', () => {
    const { getByRole } = render(<LabelAutoComplete {...baseProps} />);
    const input = getByRole('combobox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '123' } });

    expect(baseProps.onChange).toBeCalledWith('123', []);
  });
});
