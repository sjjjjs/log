
import React from 'react';
import styles from './index.module.css';

export default function NormalNavigator(props) {
    return (
        <div className={styles.container}>
            <div className={styles.contentBox}>
                { props.children }
            </div>
        </div>
    );
}