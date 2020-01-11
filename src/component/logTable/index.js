import React from 'react';
import { Tag, Tooltip } from '@blueprintjs/core';
import names from 'classnames';

import styles from './index.module.css';

export default function LogTable(props) {
    return (
        <div className={styles.logTableBox}>
            <div className={styles.logTableHead}>
                <div className={styles.logTableRow}>
                    <div className={names(styles.logTableCol, styles.col1)}>#</div>
                    <div className={names(styles.logTableCol, styles.col2)}>Time</div>
                    <div className={names(styles.logTableCol, styles.col3)}>Logger</div>
                    <div className={names(styles.logTableCol, styles.col4)}>Level</div>
                    <div className={names(styles.logTableCol, styles.col5)}>Message</div>
                </div>
            </div>
            <div className={styles.logTableBody}>
                <div className={styles.logTableRow}>
                    <div className={names(styles.logTableCol, styles.col1)}>1</div>
                    <div className={names(styles.logTableCol, styles.col2)}>
                        <Tooltip content="2020.01.11 12:50">1 minutes ago</Tooltip>
                    </div>
                    <div className={names(styles.logTableCol, styles.col3)}>Life</div>
                    <div className={names(styles.logTableCol, styles.col4)}>
                        <Tag intent="warning">Wanging</Tag>
                    </div>
                    <div className={names(styles.logTableCol, styles.col5)}>i'm to much angry today.</div>
                </div>
                <div className={styles.logTableRow}>
                    <div className={names(styles.logTableCol, styles.col1)}>2</div>
                    <div className={names(styles.logTableCol, styles.col2)}>
                        <Tooltip content="2020.01.11 12:50">2018-12-21</Tooltip>
                    </div>
                    <div className={names(styles.logTableCol, styles.col3)}>Daily Work</div>
                    <div className={names(styles.logTableCol, styles.col4)}>
                        <Tag intent="danger">Danger</Tag>
                    </div>
                    <div className={names(styles.logTableCol, styles.col5)}>display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;display: flex;
    justify-content: center;</div>
                </div>
                <div className={styles.logTableRow}>
                    <div className={names(styles.logTableCol, styles.col1)}>3</div>
                    <div className={names(styles.logTableCol, styles.col2)}>
                        <Tooltip content="2020.01.11 12:50">1990.04.08</Tooltip>
                    </div>
                    <div className={names(styles.logTableCol, styles.col3)}>Habits</div>
                    <div className={names(styles.logTableCol, styles.col4)}>
                        <Tag intent="info">Info</Tag>
                    </div>
                    <div className={names(styles.logTableCol, styles.col5)}>i'm to much angry today.</div>
                </div>
            </div>
            <div className={styles.logTableFoot}></div>
        </div>
    );
}