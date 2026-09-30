import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ColorSelect from '..';

describe('ColorSelect with React 19', () => {
  beforeEach(() => {
    // Canvas paints only the transparency checkerboard; jsdom has no canvas.
    jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('opens the real picker and preserves the hex/rgb value contract', async () => {
    const onChange = jest.fn();
    const onChangeComplete = jest.fn();
    render(
      <ColorSelect
        value={{ hex: '#000000', rgb: '0,0,0' }}
        onChange={onChange}
        renderValueNode={() => <button type="button">Choose color</button>}
        reactColorProps={{
          presetColors: [{ color: '#ff0000', title: 'Red preset' }],
          onChangeComplete,
        }}
      />,
    );

    expect(screen.queryByLabelText('hex')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Choose color' }));
    expect(await screen.findByLabelText('hex')).toBeTruthy();
    fireEvent.click(screen.getByTitle('Red preset'));

    expect(onChange).toHaveBeenLastCalledWith({ hex: '#ff0000', rgb: '255,0,0' });
    await waitFor(() => {
      expect(onChangeComplete).toHaveBeenCalledWith(
        expect.objectContaining({ hex: '#ff0000' }),
        expect.anything(),
      );
    });
  });

  it('keeps alpha editing and the original react-color completion payload', async () => {
    const onChange = jest.fn();
    const onChangeComplete = jest.fn();
    render(
      <ColorSelect
        value={{ hex: '#ff0000', rgb: '255,0,0' }}
        onChange={onChange}
        reactColorProps={{ onChangeComplete }}
        RcTriggerProps={{ defaultPopupVisible: true }}
      />,
    );

    fireEvent.change(await screen.findByLabelText('a'), { target: { value: '50' } });
    expect(onChange).toHaveBeenLastCalledWith({ hex: '#ff0000', rgb: '255,0,0' });
    await waitFor(() => {
      expect(onChangeComplete).toHaveBeenCalledWith(
        expect.objectContaining({ rgb: { r: 255, g: 0, b: 0, a: 0.5 } }),
        expect.anything(),
      );
    });
  });

  it('honors disabled popup controls', () => {
    render(
      <ColorSelect
        RcTriggerProps={{ disabled: true, defaultPopupVisible: true }}
        renderValueNode={() => <button type="button">Choose color</button>}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Choose color' }));
    expect(screen.queryByLabelText('hex')).toBeNull();
  });

  it('preserves the disableAlpha picker option', async () => {
    render(
      <ColorSelect
        reactColorProps={{ disableAlpha: true }}
        RcTriggerProps={{ defaultPopupVisible: true }}
      />,
    );

    expect(await screen.findByLabelText('hex')).toBeTruthy();
    expect(screen.queryByRole('textbox', { name: 'a' })).toBeNull();
  });
});
