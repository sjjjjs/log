import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import styles from './logCreate.module.css';
import LogEditor from 'component/logEditor';
import AppFrame from 'component/appFrame';
import NormalNavigator from 'component/normalNavigator';
import logService from 'service/log';
import { AppToaster } from 'util/toaster';

export default function LogCreate() {
    const h = useHistory();
    const params = useParams();
    const { id = null } = params;
    const [ initState, setInitState ] = useState(false);
    const [ isNew, setIsNew ] = useState(true);
    const [ value, setValue ] = useState('');

    useEffect(() => {
        (async function() {
            if (!id) {
                setInitState(true);
                return;
            };
            logService.get(id)
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
        <AppFrame header={
            <NormalNavigator showBack actions={
                <Button minimal intent="primary" onClick={() => {
                    let process;
                    if (isNew) {
                        process = logService.add({
                            content: value
                        });
                    } else {
                        process = logService.upd(id, {
                            content: value
                        });
                    }
                    process.then(() => {
                        h.goBack();
                    }).catch(err => {
                        AppToaster.show({ timeout: 2000, message: err.message, intent: 'error' });
                    });
                }}>提交</Button>
            } />
        }>
            <div className={styles.container}>
                {
                    initState && <LogEditor
                        value={value}
                        onChange={val => setValue(val)}
                        placeholder="请由此开始..."
                    />
                }
            </div>
        </AppFrame>
    );
}
