import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LabelSelect from '../index';

const baseProps = {
  setOpen: jest.fn(),
};

const options = [
  {
    label: 'jack',
    value: 'jack',
  },
];

describe('label-select', () => {
  it('label-select should work fine ', async () => {
    const { getByRole, rerender, container, debug } = render(
      <LabelSelect {...baseProps} options={options} />,
    );
    const labelNode = container.querySelector('.label-select-text') as HTMLLabelElement;
    await waitFor(() => {
      fireEvent.click(labelNode);
    });

    expect(container.querySelector('.ant-select-open')).toBeTruthy;
    expect(baseProps.setOpen).toBeCalledWith(true);
  });
});
