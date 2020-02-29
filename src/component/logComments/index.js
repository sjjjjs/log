/* eslint-disable jsx-a11y/anchor-is-valid  */

import React, { useState } from 'react';
import styles from './index.module.css';
import names from 'classnames';
import { Classes } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';
import { AppToaster } from 'util/toaster';
import logCommentService from 'service/logComment';
import MarkdownPreview from 'component/markdownPreview';
import getUrlUtil from 'util/getUrlUtil';
import Ago from 'component/timeAgo';

function LogComment(props) {
    const h = useHistory();
    const { comment: c, id } = props;
    const [ visible, setVisible ] = useState(true);
    return (
        visible && <div className={styles.comment} key={c.id}>
            <div className={names(Classes.TEXT_MUTED, styles.commentMeta)}>
                <div className={styles.commentMetaBlock}>
                    <span className={styles.commentMetaItem}><Ago time={c.time} /></span>
                </div>
                <div className={names(styles.commentMetaBlock, styles.hoverVisible)}>
                    <a
                        className={names(
                            styles.commentMetaItem,
                            Classes.TEXT_MUTED
                        )}
                        onClick={() => h.push(getUrlUtil.getLogCommentCreateUrl(id, c.id))}
                    >
                        修改
                    </a>
                    <a
                        className={names(
                            styles.commentMetaItem,
                            Classes.TEXT_MUTED
                        )}
                        onClick={() => {
                            if (!window.confirm('你确定将此条记录删除吗？')) return;
                            logCommentService.del(c.id)
                                .then(() => {
                                    setVisible(false);
                                    AppToaster.show({ timeout: 2000, message: '删除成功', intent: 'success' });
                                })
                                .catch(err => {
                                    alert(err.message);
                                });
                        } }
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