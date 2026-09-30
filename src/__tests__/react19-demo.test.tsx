import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { act } from '@testing-library/react';
import { JsxEmit, ModuleKind, transpileModule } from 'typescript';
import { modifyCodeSandboxData, modifyStackBlitzData } from '../react19-demo';

describe('exported React 19 demos', () => {
  it.each(['jsx', 'tsx'])('mounts the exported %s demo using the React 19 client', async (extension) => {
    const entry = `index.${extension}`;
    const app = `App.${extension}`;
    const manifest = JSON.stringify({ dependencies: { antd: '^6.6.5' } });
    const sandbox = modifyCodeSandboxData({
      files: {
        [entry]: { content: 'ReactDOM.render(<App />, root);' },
        [app]: { content: 'original demo' },
        'package.json': { content: manifest },
      },
    });
    const stackBlitz = modifyStackBlitzData({
      files: {
        [entry]: 'ReactDOM.render(<App />, root);',
        [app]: 'original demo',
        'package.json': manifest,
      },
    });
    expect(sandbox.files[app].content).toBe('original demo');
    expect(stackBlitz.files[app]).toBe('original demo');
    expect(JSON.parse(sandbox.files['package.json'].content).dependencies.antd).toBe('^6.6.5');

    for (const code of [sandbox.files[entry].content, stackBlitz.files[entry]]) {
      const container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
      let root: Root | undefined;
      const output = transpileModule(code, {
        compilerOptions: { module: ModuleKind.CommonJS, jsx: JsxEmit.ReactJSX },
        fileName: entry,
      }).outputText;
      const demoRequire = (name: string) => {
        if (name === './App') {
          return { default: () => createElement('p', null, 'React 19 demo mounted') };
        }
        if (name === 'react-dom/client') {
          return { createRoot: (element: HTMLElement) => (root = createRoot(element)) };
        }
        return require(name);
      };
      try {
        await act(async () => {
          new Function('require', 'exports', output)(demoRequire, {});
        });
        expect(container.textContent).toBe('React 19 demo mounted');
      } finally {
        await act(async () => root?.unmount());
        container.remove();
      }
    }
  });
});
