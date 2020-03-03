import React from 'react';
import styles from './index.module.css';
import { noop } from 'util/commonUtil';
import MarkdownEditor from 'component/markdownEditor';

export default function LogCommentEditor (props) {
    const { value = '', onChange = noop, placeholder = '', onConfirm = noop } = props;

    return (
        <div className={styles.container}>
            <MarkdownEditor
                value={value}
                placeholder={placeholder}
                onChange={val => onChange(val)}
                onSubmit={() => onConfirm()}
            />
        </div>
    );
}