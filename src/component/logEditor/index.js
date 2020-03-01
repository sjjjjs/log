import React from 'react';
import { Card } from '@blueprintjs/core';
import styles from './index.module.css';
import { noop } from 'util/commonUtil';
import MarkdownEditor from 'component/markdownEditor';

export default function LogEditor(props) {
    const { value = '', onChange = noop, placeholder = '', onConfirm = noop } = props;
    return (
        <div className={styles.container}>
            <Card>
                <MarkdownEditor
                    value={value}
                    placeholder={placeholder}
                    onChange={val => onChange(val)}
                    onSubmit={() => onConfirm()}
                />
            </Card>
        </div>
    );
}