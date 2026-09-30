import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelAutoComplete from '../index';

const baseProps = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
  onDropdownVisibleChange: jest.fn(),
};

describe('LabelAutoComplete', () => {
  it('prefers onOpenChange when both new and legacy callbacks are supplied', async () => {
    const onOpenChange = jest.fn();
    const onDropdownVisibleChange = jest.fn();
    const { container, getByTitle } = render(
      <LabelAutoComplete
        label="choose"
        options={[{ value: 'first', label: 'first' }]}
        onOpenChange={onOpenChange}
        onDropdownVisibleChange={onDropdownVisibleChange}
      />,
    );
    fireEvent.click(container.querySelector('label')!);
    fireEvent.click(getByTitle('first'));
    await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(false));
    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onDropdownVisibleChange).not.toHaveBeenCalled();
  });

  it('LabelAutoComplete base test', async () => {
    const TestComponet = (props: any) => {
      const [options, _setOptions] = React.useState<any[]>([
        { value: 'Burns Bay Road', disabled: true },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ]);
      return <LabelAutoComplete label="我是标题" options={options} {...props} />;
    };

    const { container, getByTitle, getByRole } = render(<TestComponet {...baseProps} />);

    const labelNode = container.querySelector(
      '.label-auto-complete-text',
    ) as HTMLLabelElement;
    const input = getByRole('combobox') as HTMLInputElement;

    expect(labelNode).toHaveTextContent('我是标题');

    await waitFor(() => {
      fireEvent.click(labelNode);
    });

    expect(input).toHaveAttribute('aria-expanded', 'true');

    await waitFor(() => {
      fireEvent.click(getByTitle('Downing Street'));
    });

    await waitFor(() => {
      expect(input).toHaveAttribute('aria-expanded', 'false');
    });
    expect(input.value).toBe('Downing Street');
    expect(baseProps.onDropdownVisibleChange).toHaveBeenLastCalledWith(false);
    expect(baseProps.onChange).toBeCalledWith('Downing Street', [
      { value: 'Burns Bay Road', disabled: true },
      { value: 'Downing Street' },
      { value: 'Wall Street' },
    ]);

    fireEvent.blur(input);

    expect(baseProps.onBlur).toBeCalled();
    expect(baseProps.onBlur).toBeCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'Downing Street' }),
      }),
    );

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('when no option enter', () => {
    const { getByRole } = render(<LabelAutoComplete {...baseProps} />);
    const input = getByRole('combobox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '123' } });

    expect(baseProps.onChange).toBeCalledWith('123', []);
  });
});
