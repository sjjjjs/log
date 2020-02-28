import React from 'react';
import { Card, TextArea } from '@blueprintjs/core';
import styles from './index.module.css';
import { noop } from 'util/commonUtil';

export default function LogEditor(props) {
    const { value = '', onChange = noop, placeholder = '' } = props;
    return (
        <div className={styles.container}>
            <Card>
                <TextArea
                    fill
                    large
                    value={value}
                    growVertically
                    placeholder={placeholder}
                    onChange={evt => onChange(evt.target.value)}
                />
            </Card>
        </div>
    );
}