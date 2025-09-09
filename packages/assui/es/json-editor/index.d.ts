import type { JSONEditorOptions } from 'jsoneditor';
import React from 'react';
export type JSONEditorProps = {
    className?: string;
    options?: JSONEditorOptions;
    onChange?: (value: string) => void;
    value?: string;
};
declare const ForwardRefJsonEditor: React.ForwardRefExoticComponent<JSONEditorProps & React.RefAttributes<unknown>>;
export default ForwardRefJsonEditor;
