import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelSelect from '../index';

const baseProps = {
  setOpen: jest.fn(),
  onChange: jest.fn(),
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
  it('label-select should work fine ', async () => {
    const { getByTitle, container } = render(
      <LabelSelect {...baseProps} label="我是标题" options={options} />,
    );

    const labelNode = container.querySelector('.label-select-text') as HTMLLabelElement;

    expect(labelNode).toHaveTextContent('我是标题');

    await waitFor(() => {
      fireEvent.click(labelNode);
    });

    expect(container.querySelector('.ant-select-open')).toBeTruthy();
    expect(baseProps.setOpen).toBeCalledWith(true);

    await waitFor(() => {
      fireEvent.click(getByTitle('lucy'));
    });

    expect(container.querySelector('.ant-select-open')).toBeFalsy();
    expect(container.querySelector('.ant-select-selection-item')).toHaveTextContent('lucy');
    expect(baseProps.onChange).toBeCalledWith('lucy');
  });
});
