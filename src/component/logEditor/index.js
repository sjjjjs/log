import React, { useState, useEffect } from 'react';
import { Button, Card, TextArea } from '@blueprintjs/core';
import styles from './index.module.css';
import store from 'store';

function handleSubmit(value) {
    store.logMessages.put({
        time: new Date(),
        content: value
    }).then(() => {
        window.location.href = '#/log';
    }).catch(err => {
        alert(err.message);
    });
}

export default function LogEditor (props) {
    const { id } = props;
    const [ initState, setInitState ] = useState(false);
    const [ value, setValue ] = useState('');

    useEffect(() => {
        (async function() {
            store.logMessages.get(Number(id))
                .then(m => m && setValue(m.content))
                .finally(() => setInitState(true));
        })();
    }, [ id ]);
    return (
        <div className={styles.container}>
            {
                initState && <Card>
                    <TextArea
                        fill
                        large
                        value={value}
                        growVertically
                        placeholder="在此开始..."
                        onChange={evt => setValue(evt.target.value)}
                    />
                    <div className={styles.buttonWrap}>
                        <Button intent="primary" onClick={() => handleSubmit(value)}>提交</Button>
                    </div>
                </Card>
            }
        </div>
    );
}