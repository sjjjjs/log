import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import styles from './log.module.css';
import LogItem from 'component/logItem';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import NormalNavigator from 'component/normalNavigator';
import getUrlUtil from 'util/getUrlUtil';

export default function Log() {
    const h = useHistory();
    const [logs, setlogs] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await logService.all();
            setlogs(list);
        }
        fetch();
    }, []);
    return (
        <AppFrame header={
            <NormalNavigator title="英雄·日志" actions={
                <Button
                    minimal intent="primary" icon="annotation"
                    onClick={() => h.push(getUrlUtil.getLogCreateUrl())}
                >创建日志</Button>
            } />
        }>
            <div className={styles.container}>
                {
                    logs.map(message => (
                        <LogItem
                            key={message.id}
                            id={message.id}
                            date={message.time}
                        >{message.content}</LogItem>
                    ))
                }
            </div>
        </AppFrame>
    );
}
