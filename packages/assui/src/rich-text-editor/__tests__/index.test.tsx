import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import type { TinyMCE } from 'tinymce';
import type { RichTextEditorProps } from '../index';

describe('RichTextEditor with the React 19 integration', () => {
  let tinymce: TinyMCE;
  let RichTextEditor: React.ComponentType<RichTextEditorProps>;
  let init: jest.SpyInstance;
  const originalMatchMedia = window.matchMedia;

  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((media: string) => ({
      matches: false,
      media,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    tinymce = require('tinymce/tinymce');
    RichTextEditor = require('../index').default;
  });

  beforeEach(() => {
    // Exercise the real React integration without starting TinyMCE's iframe
    // and asset loading, which need a browser's layout engine.
    init = jest.spyOn(tinymce, 'init').mockResolvedValue([]);
  });

  afterEach(() => init.mockRestore());
  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('initializes the bundled TinyMCE 6 with defaults and caller overrides', () => {
    const { container } = render(
      <RichTextEditor
        value="<p>Initial content</p>"
        init={{ height: 450, toolbar: 'bold italic' }}
      />,
    );

    expect(tinymce.majorVersion).toBe('6');
    expect(init).toHaveBeenCalledTimes(1);
    expect(init.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        target: container.querySelector('textarea'),
        height: 450,
        toolbar: 'bold italic',
        language: 'zh-Hans',
        skin: false,
        plugins: expect.arrayContaining(['code', 'table', 'image']),
      }),
    );
    expect(container.querySelector('textarea')).toHaveValue('<p>Initial content</p>');
    expect(document.querySelector('script[src*="tiny.cloud"]')).toBeNull();
  });

  it('passes inline and readonly settings through the upgraded React integration', () => {
    const { container } = render(
      <RichTextEditor inline readonly initialValue="<p>Inline content</p>" />,
    );

    expect(init).toHaveBeenCalledTimes(1);
    expect(init.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        inline: true,
        readonly: true,
        target: container.firstElementChild,
      }),
    );
  });
});
