/* eslint-disable jsx-a11y/anchor-is-valid  */

import React, { useState } from 'react';
import styles from './index.module.css';
import names from 'classnames';
import { Classes, Alert, Intent } from '@blueprintjs/core';
import TimeAgo from 'timeago-react';
import { useHistory } from 'react-router-dom';
import { AppToaster } from 'util/toaster';
import logCommentService from 'service/logComment';
import MarkdownPreview from 'component/markdownPreview';

function LogComment(props) {
    const h = useHistory();
    const { comment: c, id } = props;
    const [ visible, setVisible ] = useState(true);
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        visible && <div className={styles.comment} key={c.id}>
            <Alert
                cancelButtonText="取消"
                confirmButtonText="确定删除"
                icon="trash"
                intent={Intent.DANGER}
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
                onConfirm={() => {
                    setIsOpen(false);
                    logCommentService.del(c.id)
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
            <div className={names(Classes.TEXT_MUTED, styles.commentMeta)}>
                <div className={styles.commentMetaBlock}>
                    <span className={styles.commentMetaItem}><TimeAgo datetime={c.time} locale='zh_CN' /></span>
                </div>
                <div className={names(styles.commentMetaBlock, styles.hoverVisible)}>
                    <a
                        className={names(
                            styles.commentMetaItem,
                            Classes.TEXT_MUTED,
                            Classes.TEXT_SMALL
                        )}
                        onClick={() => h.push(`/log.comment.createOrEdit/${id}/${c.id}`)}
                    >
                        修改
                    </a>
                    <a
                        className={names(
                            styles.commentMetaItem,
                            Classes.TEXT_MUTED,
                            Classes.TEXT_SMALL
                        )}
                        onClick={() => setIsOpen(true) }
                    >
                        删除
                    </a>
                </div>
            </div>
            <div className={names(styles.commentContent, Classes.RUNNING_TEXT)}>
                <MarkdownPreview source={c.content} />
            </div>
        </div>
    );
}

export default function LogComments(props) {
    return (
        <div className={styles.comments}>
            {
                props.list && props.list.map(c => (
                    <LogComment key={c.id} comment={c} id={props.id} />
                ))
            }
        </div>
    );
}