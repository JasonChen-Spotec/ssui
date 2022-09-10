import type { JSONEditorOptions } from 'jsoneditor';
import JSONEditor from 'jsoneditor';
import React, { useEffect, useImperativeHandle } from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useMount from 'ahooks/lib/useMount';
import isEqual from 'lodash/isEqual';
import useUnmount from 'ahooks/lib/useUnmount';
import classNames from 'classnames';

export type JSONEditorProps = {
  className?: string;
  options?: JSONEditorOptions;
  onChange?: (value: string) => void;
  value?: string;
};

const JsonEditor: React.ForwardRefRenderFunction<unknown, JSONEditorProps> = (props, ref) => {
  const { options, className } = props;
  const [value, setValue] = useControllableValue(props);
  const containerRef = React.useRef<HTMLDivElement | null>();

  const editorInstanceRef = React.useRef<JSONEditor>();

  useMount(() => {
    editorInstanceRef.current = new JSONEditor(containerRef.current as HTMLDivElement, {
      mode: 'code',
      indentation: 2,
      ...options,
      onChangeText() {
        try {
          const currentJson = editorInstanceRef.current?.get();
          setValue(currentJson);
        } catch (error) {
          console.log('error', error);
        }
      },
    });
  });

  useImperativeHandle(ref, () => containerRef.current);

  useEffect(() => {
    if (value && !isEqual(value, editorInstanceRef.current?.get())) {
      editorInstanceRef.current?.update(value);
    }
  }, [value]);

  useUnmount(() => {
    editorInstanceRef.current?.destroy();
  });

  return (
    <div
      ref={(el) => (containerRef.current = el)}
      className={classNames('a-jason-editor', className)}
    />
  );
};

const ForwardRefJsonEditor = React.forwardRef<unknown, JSONEditorProps>(JsonEditor);

export default ForwardRefJsonEditor;
