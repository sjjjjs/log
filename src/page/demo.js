import React, { useEffect, useState } from 'react';
import store from 'store/index';
import styles from './demo.module.css';
import LogItem from 'component/logItem';

function Demo() {
    const [logMessages, setLogMessages] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await store.logMessages.orderBy('time').toArray();
            setLogMessages(list.reverse());
        }
        fetch();
    }, []);
    return (
        <div className={styles.container}>
            { logMessages.map(message => (
                <LogItem key={message.id} date={message.date}>{message.content}</LogItem>
            ))}
        </div>
    );
}

export const component = Demo;
export const path = '/log.list';