/* eslint-disable */

import React, { useState, useEffect } from 'react';
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
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const list = await store.logCommentMessage.orderBy('time').toArray();
            setComments(list);
        }
        fetchData();
    }, [ props.id ])
    return (
        visible && <div className={styles.container}>
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
                        onClick={() => h.push(`/log.comment.create/${props.id}`)}
                    >
                        评论
                    </a>
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
            <div className={styles.commentBox}>
                <div className={styles.comments}>
                    {
                        comments && comments.map(c => (
                            <div className={styles.comment} key={c.id}>
                                <div className={names(Classes.TEXT_MUTED, styles.commentTime)}>
                                    <TimeAgo datetime={c.time} locale='zh_CN' />
                                </div>
                                <div className={names(styles.commentContent, Classes.TEXT_MUTED, Classes.RUNNING_TEXT)}>
                                    <span>{c.content}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}