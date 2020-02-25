import React from 'react';
import TimeAgo from 'timeago-react';
import styles from './index.module.css';
import names from 'classnames';

export default function(props) {
    return (
        <div className={names(styles.container)}>
            <div className={styles.content}>
                <small className={styles.date}><TimeAgo datetime={props.date} locale='zh_CN' /></small> &nbsp;
                <span>{props.children}</span>
            </div>
        </div>
    );
}