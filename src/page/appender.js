import React from 'react';
import styles from './appender.module.css';
import LogAppender from 'component/logAppender';

function Appender() {
    return (
        <div className={styles.container}>
            <LogAppender />
        </div>
    );
}

export const component = Appender;
export const path = '/log.create';