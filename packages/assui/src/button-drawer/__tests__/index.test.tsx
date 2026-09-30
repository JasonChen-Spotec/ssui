import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button, ConfigProvider, type DrawerProps } from 'antd';
import '@testing-library/jest-dom';
import ButtonDrawer, { type DrawerAction } from '../index';

const Content = ({ drawerAction }: any) => (
  <div>
    这是弹框内容
    <Button type="primary" onClick={() => drawerAction.close()}>
      点击这里关闭弹框
    </Button>
  </div>
);

const baseProps = {
  onOpen: jest.fn(),
  onClose: jest.fn(),
};

describe('ButtonDrawer', () => {
  it.each<[DrawerProps['mask'], boolean, boolean]>([
    [undefined, false, false],
    [true, false, true],
    [false, true, false],
    [{ blur: true }, false, false],
    [{ enabled: true }, false, true],
    [{ enabled: false }, true, false],
  ])('merges local mask %p with provider enabled=%p', (mask, providerEnabled, expected) => {
    render(
      <ConfigProvider drawer={{ mask: { enabled: providerEnabled } }}>
        <ButtonDrawer open mask={mask} maskClosable={false}>
          <Content />
        </ButtonDrawer>
      </ConfigProvider>,
    );
    expect(Boolean(document.querySelector('.ant-drawer-mask'))).toBe(expected);
  });

  it('preserves mask, unmount, and root styling options after the antd upgrade', async () => {
    const onClose = jest.fn();
    const { getByText, rerender } = render(
      <ButtonDrawer
        trigger={<span>open drawer</span>}
        className="legacy-drawer"
        style={{ zIndex: 1234 }}
        destroyOnClose
        onClose={onClose}
      >
        <Content />
      </ButtonDrawer>,
    );
    fireEvent.click(getByText('open drawer'));
    const drawer = document.querySelector('.ant-drawer');
    expect(drawer).toHaveClass('legacy-drawer');
    expect(drawer).toHaveStyle({ zIndex: 1234 });
    fireEvent.click(document.querySelector('.ant-drawer-mask')!);
    expect(onClose).not.toHaveBeenCalled();

    rerender(
      <ButtonDrawer
        trigger={<span>open drawer</span>}
        maskClosable
        destroyOnClose
        onClose={onClose}
      >
        <Content />
      </ButtonDrawer>,
    );
    fireEvent.click(document.querySelector('.ant-drawer-mask')!);
    expect(onClose).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByText('这是弹框内容')).toBeNull());
  });

  it('ButtonDrawer base props should work fine ', async () => {
    const { getByText, debug } = render(
      <ButtonDrawer
        title="demo"
        footer={null}
        trigger={<span>open modal</span>}
        {...baseProps}
      >
        <Content />
      </ButtonDrawer>,
    );

    const button = getByText('open modal') as HTMLButtonElement;

    fireEvent.click(button);

    const boxes = await screen.findByText('这是弹框内容');

    expect(boxes).toBeTruthy();
    expect(baseProps.onOpen).toBeCalled();

    const maskNode = await screen.queryByText((_, element) => {
      if (element?.className) {
        return element.className.toString().includes('ant-drawer ant-drawer-right');
      }
      return false;
    });

    expect(maskNode).toHaveClass('ant-drawer-open');

    const closeButton = await screen.getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(baseProps.onClose).toBeCalled();

    expect(maskNode).not.toHaveClass('ant-drawer-open');
  });

  it('ButtonDrawer base props should work fine ', async () => {
    const { getByText } = render(
      <ButtonDrawer title="demo" trigger={<span>open modal</span>}>
        <Content />
      </ButtonDrawer>,
    );

    const button = getByText('open modal') as HTMLButtonElement;

    fireEvent.click(button);

    expect(baseProps.onOpen).not.toBeCalled();

    const closeButton = await screen.getByLabelText('Close');

    fireEvent.click(closeButton);

    expect(baseProps.onClose).not.toBeCalled();
  });

  it('ButtonDrawer ref should work fine ', async () => {
    const ref = React.createRef<DrawerAction>();
    render(
      <ButtonDrawer ref={ref} title="demo" trigger={<span>open modal</span>}>
        <Content />
      </ButtonDrawer>,
    );
    act(() => {
      ref.current?.open();
    });

    const maskNode = await screen.queryByText((_, element) => {
      if (element?.className) {
        return element.className.toString().includes('ant-drawer ant-drawer-right');
      }
      return false;
    });

    expect(maskNode).toHaveClass('ant-drawer-open');

    act(() => {
      ref.current?.close();
    });

    expect(maskNode).not.toHaveClass('ant-drawer-open');
  });

  it('if children is function should work fine ', async () => {
    const childrenFunc = jest.fn(() => <Content />);
    render(
      <ButtonDrawer title="demo" trigger={<span>open modal</span>}>
        {childrenFunc}
      </ButtonDrawer>,
    );
  });
});
