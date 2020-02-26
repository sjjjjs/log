/* eslint-disable */

import React, { useState } from 'react';
import TimeAgo from 'timeago-react';
import { useHistory } from 'react-router-dom';
import { Card, Classes } from '@blueprintjs/core';
import names from 'classnames';
import styles from './index.module.css';
import store from 'store';
import ReactMarkdown from 'react-markdown';

export default function (props) {
    const h = useHistory();
    const [ visible, setVisible ] = useState(true);
    return (
        visible && <div className={styles.container}>
            <div className={styles.meta}>
                <span className={names(Classes.TEXT_MUTED, Classes.TEXT_SMALL)}>
                    <TimeAgo datetime={props.date} locale='zh_CN' />
                </span>
                <span className={styles.metaBlock}>
                    <a
                        className={names(
                            styles.metaItem,
                            Classes.TEXT_MUTED,
                            Classes.TEXT_SMALL
                        )}
                        onClick={() => h.push(`/log.createOrEdit/${props.id}`)}
                    >
                        编辑
                    </a>
                    <a
                        className={names(
                            styles.metaItem,
                            Classes.TEXT_MUTED,
                            Classes.TEXT_SMALL
                        )}
                        onClick={() => {
                            store.logMessages.delete(props.id)
                            .then(() => {
                                setVisible(false);
                            })
                            .catch(err => {
                                alert(err.message);
                            });
                        }}
                    >
                        删除
                    </a>
                </span>
            </div>
            <Card>
                <div className={names("markdown-body", styles.markdownBody)}>
                    <ReactMarkdown source={props.children} />
                </div>
            </Card>
        </div>
    );
}