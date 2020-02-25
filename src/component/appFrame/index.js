import React from 'react';
import styles from './index.module.css';

export default function(props) {
    return (
        <div className={styles.container}>
            { props.header && <div className={styles.header}>{props.header}</div> }
            <div className={styles.body}>{props.children}</div>
            { props.footer && <div className={styles.footer}>{props.footer}</div> }
        </div>
    );
}