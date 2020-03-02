import React, { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import styles from './logCommentCreate.module.css';
import LogCommentEditor from 'component/logCommentEditor';
import AppFrame from 'component/appFrame';
import NormalNavigation from 'component/normalNavigator';
import logCommentService from 'service/logComment';

export default function LogCommentCreate() {
    const params = useParams();
    const { id = null, cid = null } = params;
    const [ initState, setInitState ] = useState(false);
    const [ isNew, setIsNew ] = useState(true);
    const [ value, setValue ] = useState('');
    const h = useHistory();

    useEffect(() => {
        (async function() {
            if (!cid) {
                setInitState(true);
                return;
            };
            logCommentService.get(cid)
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
        <AppFrame header={
            <NormalNavigation showBack title="评论" actions={
                <Button minimal icon="confirm" intent="primary" onClick={() => {
                    let process;
                    if (isNew) {
                        process = logCommentService.add(id, {
                            content: value
                        });
                    } else {
                        process = logCommentService.upd(cid, {
                            content: value
                        });
                    }
                    process.then(() => {
                        h.goBack();
                    }).catch(err => {
                        alert(err.message);
                    });
                }}>提交</Button>
            } />
        }>
            <div className={styles.container}>
                {
                    initState && <LogCommentEditor
                        value={value}
                        onChange={val => setValue(val)}
                        placeholder="请从此出开始..."
                    />
                }
            </div>
        </AppFrame>
    );
}
