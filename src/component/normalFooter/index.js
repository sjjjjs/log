
import React from 'react';
import styles from './index.module.css';
import names from 'classnames';

export default function NormalNavigator(props) {
    const { noEffect = false } = props;
    return (
        <div className={names(styles.container, noEffect ? styles.noEffect : '')}>
            <div className={styles.contentBox}>
                { props.children }
            </div>
        </div>
    );
}