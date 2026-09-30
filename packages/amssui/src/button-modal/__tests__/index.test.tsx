import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonModal, { type ModalAction } from '../index';

const Content = ({ modalAction }: { modalAction?: ModalAction }) => (
  <button type="button" onClick={() => modalAction?.close()}>
    Close from content
  </button>
);

describe('mobile ButtonModal', () => {
  it('opens the real react-vant dialog and injects the close action into its child', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(
      <ButtonModal
        trigger={<button type="button">Open modal</button>}
        title="Mobile dialog"
        onOpen={onOpen}
        onClose={onClose}
      >
        <Content />
      </ButtonModal>,
    );

    expect(screen.queryByText('Mobile dialog')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Open modal' }));
    expect(await screen.findByText('Mobile dialog')).toBeInTheDocument();
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: 'Close from content' }));

    await waitFor(() => expect(screen.getByText('Mobile dialog')).not.toBeVisible());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('keeps imperative refs and render-function children working', async () => {
    const ref = React.createRef<ModalAction>();
    render(
      <ButtonModal ref={ref} title="Ref dialog">
        {(action) => <Content modalAction={action} />}
      </ButtonModal>,
    );

    act(() => ref.current?.open());
    expect(await screen.findByText('Ref dialog')).toBeInTheDocument();
    act(() => ref.current?.close());
    await waitFor(() => expect(screen.getByText('Ref dialog')).not.toBeVisible());
  });
});
