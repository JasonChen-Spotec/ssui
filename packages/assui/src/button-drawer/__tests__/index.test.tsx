import React from 'react';
import { Button } from 'antd';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonDrawer, { DrawerAction } from '../index';

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
  it('ButtonDrawer base props should work fine ', async () => {
    const { getByText, debug } = render(
      <ButtonDrawer title="demo" footer={null} trigger={<span>open modal</span>} {...baseProps}>
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
