/* eslint-disable */

import React, { useState } from 'react';
import TimeAgo from 'timeago-react';
import { useHistory } from 'react-router-dom';
import { Card, Classes, Alert, Intent } from '@blueprintjs/core';
import names from 'classnames';
import styles from './index.module.css';
import store from 'store';
import ReactMarkdown from 'react-markdown';
import { AppToaster } from 'util/toaster';

export default function (props) {
    const h = useHistory();
    const [ visible, setVisible ] = useState(true);
    const [ isOpen, setIsOpen ] = useState(false);
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
                            setIsOpen(true);
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
            <Alert
                cancelButtonText="取消"
                confirmButtonText="确定删除"
                icon="trash"
                intent={Intent.DANGER}
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
                onConfirm={() => {
                    setIsOpen(false);
                    store.logMessages.delete(props.id)
                        .then(() => {
                            setVisible(false);
                            AppToaster.show({ timeout: 2000, message: '删除成功', intent: 'success' });
                        })
                        .catch(err => {
                            alert(err.message);
                        });
                }}
            >
                你确定将此条记录删除吗？ 删除后无法再次找回，请确认操作。
            </Alert>
        </div>
    );
}