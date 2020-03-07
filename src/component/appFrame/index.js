import React from 'react';
import styles from './index.module.css';
import NormalNavigator from '../normalNavigator';

export default function(props) {
    return (
        <div className={styles.container}>
            <NormalNavigator actions={props.actions} />
            <div className={styles.body}>{props.children}</div>
        </div>
    );
}