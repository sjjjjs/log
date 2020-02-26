import React, { useState } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import styles from './index.module.css';
import store from 'store';

function handleSubmit(value) {
    store.logMessages.add({
        time: new Date(),
        content: value
    }).then(() => {
        window.location.href = '#/log.list';
    }).catch(err => {
        alert(err.message);
    })
}

export default function LogAppender (props) {
    const [value, setValue] = useState('');
    return (
        <div className={styles.container}>
            <Card>
                <textarea placeholder="在此开始..." value={value} onChange={evt => setValue(evt.target.value)} className={styles.textarea}></textarea>
                <div className={styles.buttonWrap}>
                    <Button intent="primary" onClick={() => handleSubmit(value)}>提交</Button>
                </div>
            </Card>
        </div>
    );
}