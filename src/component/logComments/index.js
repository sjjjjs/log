/* eslint-disable jsx-a11y/anchor-is-valid  */

import React from 'react';
import styles from './index.module.css';
import names from 'classnames';
import { Classes, Icon, ButtonGroup, Button, Popover, Position, Divider } from '@blueprintjs/core';
import MarkdownPreview from 'component/markdownPreview';
import Ago from 'component/timeAgo';
import { noop } from 'util/commonUtil';

function LogComment(props) {
    const { comment: c, onRequestDelete = noop, onRequestUpdate = noop } = props;

    return (
        <div className={styles.comment} key={c.id}>
            <div className={names(Classes.TEXT_MUTED, styles.commentMeta)}>
                <div className={styles.commentMetaBlock}>
                    <span className={styles.commentMetaItem}><Ago time={c.time} /></span>
                </div>
                <div className={names(styles.commentMetaBlock, styles.hoverVisible)}>
                    <Popover content={
                        <ButtonGroup>
                            <Button minimal onClick={() => onRequestUpdate(c)}>编辑</Button>
                            <Divider />
                            <Button minimal intent="danger" onClick={() => onRequestDelete(c.id)}>删除</Button>
                        </ButtonGroup>
                    } position={Position.TOP} interactionKind="hover">
                        <a
                            className={names(
                                styles.commentMetaItem,
                                Classes.TEXT_MUTED,
                                Classes.TEXT_SMALL
                            )}
                        >
                            <Icon icon="more" />
                        </a>
                    </Popover>
                </div>
            </div>
            <div className={names(styles.commentContent, Classes.RUNNING_TEXT)}>
                <MarkdownPreview source={c.content} />
            </div>
        </div>
    );
}

export default function LogComments(props) {
    const { list = [], onRequestDelete, onRequestUpdate} = props;
    return (
        <div className={styles.comments}>
            {
                list.map(c => (
                    <LogComment
                        key={c.id}
                        comment={c}
                        onRequestDelete={onRequestDelete}
                        onRequestUpdate={onRequestUpdate}
                    />
                ))
            }
        </div>
    );
}