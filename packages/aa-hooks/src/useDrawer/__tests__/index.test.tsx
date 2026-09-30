import React from 'react';
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { ConfigProvider, Drawer, type DrawerProps } from 'antd';
import '@testing-library/jest-dom';
import { generateUseDrawer, useDrawer } from '../index';

describe('useDrawer with antd 6', () => {
  it.each<[DrawerProps['mask'], boolean, boolean]>([
    [undefined, false, false],
    [true, false, true],
    [false, true, false],
    [{ blur: true }, false, false],
    [{ enabled: true }, false, true],
    [{ enabled: false }, true, false],
  ])('merges local mask %p with provider enabled=%p', (mask, providerEnabled, expected) => {
    const Example = () => {
      const [drawerProps, actions] = useDrawer({ mask, maskClosable: false });
      return (
        <>
          <button type="button" onClick={actions.open}>open</button>
          <Drawer {...drawerProps} />
        </>
      );
    };
    render(
      <ConfigProvider drawer={{ mask: { enabled: providerEnabled } }}>
        <Example />
      </ConfigProvider>,
    );
    fireEvent.click(screen.getByText('open'));
    expect(Boolean(document.querySelector('.ant-drawer-mask'))).toBe(expected);
  });

  it('preserves opening, legacy root styles, mask closing, and unmounting', async () => {
    const onBeforeClose = jest.fn();
    const Example = () => {
      const [drawerProps, actions] = useDrawer({
        className: 'legacy-drawer',
        style: { zIndex: 1234 },
        maskClosable: true,
        destroyOnClose: true,
        onBeforeClose,
        renderChildren: () => <span>drawer content</span>,
      });
      return (
        <>
          <button type="button" onClick={actions.open}>open</button>
          <Drawer {...drawerProps} />
        </>
      );
    };
    render(<Example />);
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('drawer content')).toBeInTheDocument();
    expect(document.querySelector('.ant-drawer')).toHaveClass('legacy-drawer');
    expect(document.querySelector('.ant-drawer')).toHaveStyle({ zIndex: 1234 });
    fireEvent.click(document.querySelector('.ant-drawer-mask')!);
    expect(onBeforeClose).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByText('drawer content')).toBeNull());
  });

  it('combines factory root classes and prefers v6 mask settings', () => {
    const useConfiguredDrawer = generateUseDrawer({
      className: 'factory',
      rootClassName: 'factory-root',
      maskClosable: false,
    });
    const { result } = renderHook(() => useConfiguredDrawer({
      className: 'instance',
      rootClassName: 'instance-root',
      mask: { closable: true },
    }));
    expect(result.current[0].rootClassName).toBe('factory instance factory-root instance-root');
    expect(result.current[0].mask).toEqual({ closable: true });
    act(() => result.current[1].open());
    expect(result.current[0].open).toBe(true);
    act(() => result.current[1].close());
    expect(result.current[0].open).toBe(false);
  });
});
