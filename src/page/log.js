import React, { useEffect, useState } from 'react';
import styles from './log.module.css';
import LogItem from 'component/logItem';
import AppFrame from 'component/appFrame';
import logService from 'service/log';

export default function Log() {
    const [logs, setlogs] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await logService.all();
            setlogs(list);
        }
        fetch();
    }, []);
    return (
        <AppFrame>
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
