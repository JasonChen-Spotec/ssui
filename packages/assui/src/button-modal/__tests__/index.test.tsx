import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import ButtonModal, { type ModalAction } from '../index';

const Content = ({ modalAction }: any) => (
  <div>
    这是弹框内容
    <button type="button" onClick={() => modalAction.close()}>
      点击这里关闭弹框
    </button>
  </div>
);

const baseProps = {
  onOpen: jest.fn(),
  onClose: jest.fn(),
  onOk: jest.fn(),
  onCancel: jest.fn,
};

describe('ButtonModal', () => {
  it('ButtonModal base props should work fine ', async () => {
    const { getByText } = render(
      <ButtonModal title="demo" trigger={<span>open modal</span>} {...baseProps}>
        <Content />
      </ButtonModal>,
    );

    const button = getByText('open modal') as HTMLButtonElement;
    fireEvent.click(button);
    const boxes = await screen.findByText('这是弹框内容');
    expect(boxes).toBeTruthy();
    expect(baseProps.onOpen).toBeCalled();

    const okButton = await screen.findByText('OK');
    fireEvent.click(okButton);
    expect(baseProps.onOk).toBeCalled();

    // 点击 OK 会关闭弹窗（同时触发 onClose）：mask 应消失
    await waitFor(() => {
      const maskNode = screen.queryByText(
        (_, element) => element?.className === 'ant-modal-mask',
      );
      expect(maskNode).toBeFalsy();
    });
    expect(baseProps.onClose).toHaveBeenCalledTimes(1);

    // 重新打开，通过右上角关闭按钮关闭
    fireEvent.click(button);
    await screen.findByText('这是弹框内容');
    const closeButton = await screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(baseProps.onClose).toHaveBeenCalledTimes(2);

    await waitFor(() => {
      const maskNode1 = screen.queryByText(
        (_, element) => element?.className === 'ant-modal-mask',
      );
      expect(maskNode1).toBeFalsy();
    });
  });

  it('ButtonModal base props should work fine ', async () => {
    const { getByText } = render(
      <ButtonModal title="demo" trigger={<span>open modal</span>}>
        <Content />
      </ButtonModal>,
    );

    const button = getByText('open modal') as HTMLButtonElement;
    fireEvent.click(button);
    expect(baseProps.onOpen).not.toBeCalled();

    const okButton = await screen.findByText('OK');
    fireEvent.click(okButton);
    expect(baseProps.onOk).not.toBeCalled();

    const closeButton = await screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    expect(baseProps.onClose).not.toBeCalled();
  });

  it('ButtonModal ref should work fine ', async () => {
    const ref = React.createRef<ModalAction>();
    render(
      <ButtonModal ref={ref} title="demo" trigger={<span>open modal</span>}>
        <Content />
      </ButtonModal>,
    );
    act(() => {
      ref.current?.open();
    });

    const maskNode = await screen.queryByText((_, element) => {
      return element?.className === 'ant-modal-mask';
    });
    expect(maskNode).toBeTruthy();

    act(() => {
      ref.current?.close();
    });

    const maskNode1 = await screen.queryByText((_, element) => {
      return element?.className === 'ant-modal-mask';
    });
    expect(maskNode1).toBeFalsy();
  });

  it('if children is function should work fine ', async () => {
    const childrenFunc = jest.fn(() => <Content />);
    render(
      <ButtonModal title="demo" trigger={<span>open modal</span>}>
        {childrenFunc}
      </ButtonModal>,
    );
  });
});
