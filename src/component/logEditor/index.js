import React, { useState, useEffect } from 'react';
import { Button, Card, TextArea } from '@blueprintjs/core';
import styles from './index.module.css';
import store from 'store';

export default function LogEditor (props) {
    const { id } = props;
    const [ initState, setInitState ] = useState(false);
    const [ isNew, setIsNew ] = useState(true);
    const [ value, setValue ] = useState('');

    useEffect(() => {
        (async function() {
            if (!id) {
                setInitState(true);
                return;
            };
            store.logMessages.get(Number(id))
                .then(m => {
                    m && setValue(m.content);
                    setIsNew(false);
                })
                .finally(() => {
                    setInitState(true);
                });
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
                        <Button intent="primary" onClick={() => {
                            let process;
                            if (isNew) {
                                process = store.logMessages.add({
                                    time: new Date(),
                                    content: value
                                });
                            } else {
                                process = store.logMessages.update(Number(id), {
                                    content: value
                                });
                            }
                            process.then(() => {
                                window.location.href = '#/log';
                            }).catch(err => {
                                alert(err.message);
                            });
                        }}>提交</Button>
                    </div>
                </Card>
            }
        </div>
    );
}