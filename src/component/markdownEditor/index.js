import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { TextArea } from '@blueprintjs/core';
import { noop } from 'util/commonUtil';

export default function(props) {
    const {
        value = '',
        onChange = noop,
        onSubmit = noop,
        placeholder = ''
    } = props;
    const [inputRef, setInputRef] = useState(null);
    const rSelection = inputRef ? inputRef.getAttribute('data-selection') : '';
    useEffect(() => {
        if (rSelection) {
            const selection = JSON.parse(rSelection);
            inputRef.setSelectionRange(selection.from, selection.to);
            inputRef.setAttribute('data-selection', '');
        }
    }, [ inputRef, rSelection ]);
    return (
        <div className={styles.container}>
            <div className={styles.editorBox}>
                <TextArea
                    inputRef={ref => setInputRef(ref)}
                    fill large
                    autoFocus
                    value={value}
                    growVertically
                    placeholder={placeholder}
                    onChange={evt => onChange(evt.target.value)}
                    onKeyUp={evt => {
                        if (evt.keyCode === 13 && evt.altKey === true) {
                            onSubmit();
                        }
                    }}
                    onKeyDown={evt => {
                        if (evt.keyCode === 9) {
                            evt.preventDefault();
                            const el = evt.target;
                            const indent = '    ';
                            const start = el.selectionStart;
                            const end = el.selectionEnd;
                            const head = value.substring(0, start);
                            const linesBegin = head.lastIndexOf('\n') + 1;
                            let selected = window.getSelection().toString();
                            let expandSelected = value.slice(linesBegin, end);
                            if (evt.shiftKey) {
                                selected = expandSelected.replace(/^\s{4}/, '').replace(/\n\s{4}/g, '\n');
                                onChange(value.substring(0, linesBegin) + selected + value.substring(end));
                                inputRef.setAttribute('data-selection', JSON.stringify({
                                    from: start - (/^\s{4}/.test(expandSelected) ? indent.length : 0),
                                    to: linesBegin + selected.length
                                }));
                            } else {
                                expandSelected = indent + expandSelected.replace(/\n/g, '\n' + indent);
                                onChange(value.substring(0, linesBegin) + expandSelected + value.substring(end));
                                inputRef.setAttribute('data-selection', JSON.stringify({
                                    from: start + indent.length,
                                    to: linesBegin + expandSelected.length + indent
                                }));
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}
