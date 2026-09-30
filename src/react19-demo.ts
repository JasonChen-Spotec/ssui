const entryCode = `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) createRoot(container).render(<App />);
`;

type SandboxFile = { content: string; isBinary?: boolean };

function updateDependencies(content: string, typescript: boolean): string {
  const manifest = JSON.parse(content);
  manifest.dependencies = {
    ...manifest.dependencies,
    react: '19.3.0',
    'react-dom': '19.3.0',
  };
  if (typescript) {
    manifest.devDependencies = {
      ...manifest.devDependencies,
      typescript: '^5.6.2',
      '@types/react': '^19.3.0',
      '@types/react-dom': '^19.3.0',
    };
  }
  return JSON.stringify(manifest, null, 2);
}

// dumi 2.4 still generates ReactDOM.render for React 19 sandbox exports.
export function modifyCodeSandboxData<T extends { files: Record<string, SandboxFile> }>(
  data: T,
): T {
  for (const name of ['index.jsx', 'index.tsx']) {
    if (data.files[name]) {
      data.files[name].content = entryCode;
    }
  }
  const manifest = data.files['package.json'];
  if (manifest) {
    manifest.content = updateDependencies(
      manifest.content,
      Boolean(data.files['index.tsx']),
    );
  }
  return data;
}

export function modifyStackBlitzData<T extends { files: Record<string, string> }>(
  data: T,
): T {
  for (const name of ['index.jsx', 'index.tsx']) {
    if (data.files[name]) {
      data.files[name] = entryCode;
    }
  }
  if (data.files['package.json']) {
    data.files['package.json'] = updateDependencies(
      data.files['package.json'],
      Boolean(data.files['index.tsx']),
    );
  }
  return data;
}
