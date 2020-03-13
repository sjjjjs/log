import React from 'react';
import { noop } from 'util/commonUtil';
import MonacoEditor from 'react-monaco-editor';

const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    wordWrap: 'on'
};

export default function (props) {
    const {
        value = '',
        onChange = noop,
    } = props;
    return (
        <MonacoEditor
            language="markdown"
            value={value}
            options={options}
            onChange={val => onChange(val)}
        />
    );
}
