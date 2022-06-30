import React from 'react';
import { act, render, fireEvent, screen } from '@testing-library/react';
import CopyToClipboard from '../index';

jest.mock('copy-to-clipboard', () => {
  return jest.fn().mockImplementationOnce(() => {
    return true;
  });
});

jest.useFakeTimers();

const baseProps = {
  onCopy: jest.fn(),
};

const buttonProps = {
  onClick: jest.fn(),
};

describe('ButtonModal', () => {
  it('CopyToClipboard without non-required props should work fine', async () => {
    const { getByText } = render(
      <CopyToClipboard text="这是复制内容">
        <button>复制按钮</button>
      </CopyToClipboard>,
    );

    const button = getByText('复制按钮') as HTMLButtonElement;
    expect(button).toBeTruthy();
  });

  it('CopyToClipboard base props should work fine', async () => {
    const { getByText, container } = render(
      <CopyToClipboard text="这是复制内容" tooltipTitle="复制成功" {...baseProps}>
        <button {...buttonProps}>复制按钮</button>
      </CopyToClipboard>,
    );

    const button = getByText('复制按钮') as HTMLButtonElement;
    fireEvent.click(button);
    const tooltipBoxes = await screen.findByText('复制成功');
    expect(tooltipBoxes).toBeTruthy();
    expect(baseProps.onCopy).toBeCalled();
    expect(buttonProps.onClick).toBeCalled();

    act(() => {
      jest.runAllTimers();
    });
    const tooltipOpenNode = container.querySelector('.ant-tooltip-open');
    expect(tooltipOpenNode).toBeFalsy();
  });
});
