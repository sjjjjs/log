import React from 'react';
import TimeAgo from 'timeago-react';
import { Card, Elevation, Classes } from '@blueprintjs/core';
import names from 'classnames';
import styles from './index.module.css';

export default function (props) {
    return (
        <div className={styles.container}>
            <div className={styles.meta}>
                <span className={names(Classes.TEXT_MUTED, Classes.TEXT_SMALL)}>
                    <TimeAgo datetime={props.date} locale='zh_CN' />
                </span>
            </div>
            <Card elevation={Elevation.TWO} interactive>
                <span className={Classes.RUNNING_TEXT}>{props.children}</span>
            </Card>
        </div>
    );
}