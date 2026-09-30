import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelSelect from '../index';

const baseProps = {
  setOpen: jest.fn(),
  onChange: jest.fn(),
  onDropdownVisibleChange: jest.fn(),
};

const options = [
  {
    label: 'jack',
    value: 'jack',
  },
  {
    label: 'lucy',
    value: 'lucy',
  },
];

describe('label-select', () => {
  it('prefers onOpenChange when both new and legacy callbacks are supplied', async () => {
    const onOpenChange = jest.fn();
    const onDropdownVisibleChange = jest.fn();
    const { container, getByTitle } = render(
      <LabelSelect
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

  it('label-select should work fine ', async () => {
    const { getByTitle, getByRole, container } = render(
      <LabelSelect {...baseProps} label="我是标题" options={options} />,
    );

    const labelNode = container.querySelector('.label-select-text') as HTMLLabelElement;

    expect(labelNode).toHaveTextContent('我是标题');

    await waitFor(() => {
      fireEvent.click(labelNode);
    });

    expect(getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
    expect(baseProps.setOpen).toBeCalledWith(true);

    await waitFor(() => {
      fireEvent.click(getByTitle('lucy'));
    });

    await waitFor(() => {
      expect(getByRole('combobox')).toHaveAttribute('aria-expanded', 'false');
    });
    expect(container).toHaveTextContent('lucy');
    expect(baseProps.onDropdownVisibleChange).toHaveBeenLastCalledWith(false);
    expect(baseProps.onChange).toBeCalledWith('lucy');
  });
});
