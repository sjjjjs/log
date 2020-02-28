import React from 'react';
import styles from './index.module.css';
import { TextArea } from '@blueprintjs/core';
import { noop } from 'util/commonUtil';

export default function(props) {
    const {
        value = '',
        onChange = noop,
        placeholder = ''
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.editorBox}>
                <TextArea
                    fill large
                    value={value}
                    growVertically
                    placeholder={placeholder}
                    onChange={evt => onChange(evt.target.value)}
                />
            </div>
        </div>
    );
}