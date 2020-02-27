import React, { useState, useEffect } from 'react';
import { Button, Card, TextArea } from '@blueprintjs/core';
import styles from './index.module.css';
import store from 'store';

export default function LogCommentEditor (props) {
    const { id, cid } = props;
    const [ initState, setInitState ] = useState(false);
    const [ isNew, setIsNew ] = useState(true);
    const [ value, setValue ] = useState('');

    useEffect(() => {
        (async function() {
            if (!cid) {
                setInitState(true);
                return;
            };
            store.logCommentMessage.get(Number(cid))
                .then(m => {
                    m && setValue(m.content);
                    setIsNew(false);
                })
                .finally(() => {
                    setInitState(true);
                });
        })();
    }, [ cid ]);
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
                                process = store.logCommentMessage.add({
                                    lid: id,
                                    time: new Date(),
                                    content: value
                                });
                            } else {
                                process = store.logCommentMessage.update(Number(cid), {
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