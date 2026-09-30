import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ConfigProvider, type ModalProps } from 'antd';
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
  it.each<[ModalProps['mask'], boolean, boolean]>([
    [undefined, false, false],
    [true, false, true],
    [false, true, false],
    [{ blur: true }, false, false],
    [{ enabled: true }, false, true],
    [{ enabled: false }, true, false],
  ])('merges local mask %p with provider enabled=%p', (mask, providerEnabled, expected) => {
    render(
      <ConfigProvider modal={{ mask: { enabled: providerEnabled } }}>
        <ButtonModal open mask={mask} maskClosable={false}>
          <Content />
        </ButtonModal>
      </ConfigProvider>,
    );
    expect(Boolean(document.querySelector('.ant-modal-mask'))).toBe(expected);
  });

  it('preserves mask close and unmount options after the antd upgrade', async () => {
    const onClose = jest.fn();
    const { getByText, rerender } = render(
      <ButtonModal
        trigger={<span>open modal</span>}
        destroyOnClose
        onClose={onClose}
      >
        <Content />
      </ButtonModal>,
    );
    fireEvent.click(getByText('open modal'));
    const wrapper = document.querySelector('.ant-modal-wrap')!;
    fireEvent.mouseDown(wrapper);
    fireEvent.click(wrapper);
    expect(onClose).not.toHaveBeenCalled();

    rerender(
      <ButtonModal
        trigger={<span>open modal</span>}
        maskClosable
        destroyOnClose
        onClose={onClose}
      >
        <Content />
      </ButtonModal>,
    );
    fireEvent.mouseDown(wrapper);
    fireEvent.click(wrapper);
    expect(onClose).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByText('这是弹框内容')).toBeNull());
  });

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
      const maskNode = document.querySelector('.ant-modal-mask');
      expect(maskNode).toBeFalsy();
    });
    expect(baseProps.onClose).toHaveBeenCalledTimes(1);

    // 重新打开，通过右上角关闭按钮关闭
    fireEvent.click(button);
    await screen.findByText('这是弹框内容');
    const closeButton = await screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(baseProps.onClose).toHaveBeenCalledTimes(2);

    await waitFor(() => {
      const maskNode1 = document.querySelector('.ant-modal-mask');
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

    fireEvent.click(button);
    const closeButton = await screen.getByRole('button', { name: 'Close' });
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

    const maskNode = document.querySelector('.ant-modal-mask');
    expect(maskNode).toBeTruthy();

    act(() => {
      ref.current?.close();
    });

    const maskNode1 = document.querySelector('.ant-modal-mask');
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
