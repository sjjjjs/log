import React, { useState } from 'react';
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

export default function(props) {
    const [value, setValue] = useState('');
    return (
        <div className={styles.container}>
            <textarea value={value} onChange={evt => setValue(evt.target.value)} className={styles.textarea}></textarea>
            <div className={styles.buttonWrap}>
                <button onClick={() => handleSubmit(value)}>提交</button>
            </div>
        </div>
    );
}