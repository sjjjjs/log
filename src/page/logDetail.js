import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Button, Position, Popover, Menu, MenuItem, ButtonGroup
} from '@blueprintjs/core';
import styles from './logDetail.module.css';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import logCommentService from 'service/logComment';
import LogComments from 'component/logComments';
import { AppToaster } from 'util/toaster';
import MarkdownPreview from 'component/markdownPreview';
import { sliceCodeFromSource, replaceCodeFromSource } from 'util/sourcePosUtil';
import names from 'classnames';
import Editor from 'component/logEditor';


const MODE = {
    VIEW: '10001',
    EDIT: '20001',
    COMMENT: '30001',
    APPEND: '40001',
    COMMENT_EDIT: '50001',
    PARTIAL_EDIT: '60001'
};

export default function LogDetail() {
    const h = useHistory();
    const params = useParams();
    const [logFlag, setLogFlag] = useState(false);
    const [commentsFlag, setCommentsFlag] = useState(false);
    const [logData, setLogData] = useState(null);
    const [logCommentsData, setLogCommentsData] = useState([]);
    const [editSource, setEditSource] = useState('');
    const [commentRefId, setCommentRefId] = useState('');
    const [posData, setPosData] = useState(null);
    const [mode, setMode] = useState(MODE.VIEW);

    useEffect(() => {
        async function fetchData() {
            const logInfo = await logService.get(params.id);
            setLogData(logInfo);
        }
        fetchData();
    }, [params.id, logFlag]);
    useEffect(() => {
        async function fetchData() {
            const logCommentsInfo = await logCommentService.all(params.id);
            setLogCommentsData(logCommentsInfo);
        }
        fetchData();
    }, [params.id, commentsFlag]);

    const viewAction = (
        <Popover content={
            <Menu>
                <MenuItem
                    icon="annotation" text="Edit"
                    onClick={() => {
                        setEditSource(logData.content);
                        setMode(MODE.EDIT);
                    }}
                />
                <MenuItem
                    icon="add" text="Append"
                    onClick={() => {
                        setEditSource('');
                        setMode(MODE.APPEND);
                    }}
                />
                <MenuItem
                    icon="comment" text="Comment"
                    onClick={() => {
                        setEditSource('');
                        setCommentRefId('');
                        setMode(MODE.COMMENT);
                    }}
                />
                <Menu.Divider />
                <MenuItem
                    icon="delete" intent="danger" text="Delete"
                    onClick={() => {
                        if (!window.confirm("Please confirm DELETE item.")) return;
                        logService.del(params.id)
                            .then(() => {
                                AppToaster.show({ timeout: 2000, message: '删除成功', intent: 'success' });
                                h.goBack();
                            })
                            .catch(err => {
                                alert(err.message);
                            });
                    }}
                />
            </Menu>
        } position={Position.BOTTOM_RIGHT}>
            <Button icon="cog" text="Operation" rightIcon="caret-down" />
        </Popover>
    );
    const editAction = (
        <ButtonGroup>
            <Button icon="undo" text="Cancel" onClick={() => {
                setMode(MODE.VIEW);
                setEditSource('');
            }} />
            <Button icon="confirm" text="Confirm" intent="primary" onClick={() => {
                logService.upd(params.id, {
                    content: editSource
                }).then(() => {
                    setMode(MODE.VIEW);
                    setEditSource('');
                    setLogFlag(!logFlag);
                });
            }} />
        </ButtonGroup>
    );
    const commentAction = (
        <ButtonGroup>
            <Button icon="undo" text="Cancel" onClick={() => {
                setMode(MODE.VIEW);
                setEditSource('');
            }} />
            <Button icon="confirm" text="Confirm" intent="primary" onClick={() => {
                logCommentService.add(params.id, {
                    content: editSource
                }).then(() => {
                    setEditSource('');
                    setCommentRefId('');
                    setCommentsFlag(!commentsFlag);
                    setMode(MODE.VIEW);
                });
            }} />
        </ButtonGroup>
    );
    const appendAction = (
        <ButtonGroup>
            <Button icon="undo" text="Cancel" onClick={() => {
                setMode(MODE.VIEW);
                setEditSource('');
            }} />
            <Button icon="confirm" text="Confirm" intent="primary" onClick={() => {
                logService
                    .upd(params.id, { content: logData.content + '\n\n' + editSource })
                    .then(() => {
                        setMode(MODE.VIEW);
                        setEditSource('');
                        setLogFlag(!logFlag);
                    });
            }} />
        </ButtonGroup>
    );
    const commentEditAction = (
        <ButtonGroup>
            <Button icon="undo" text="Cancel" onClick={() => {
                setMode(MODE.VIEW);
                setEditSource('');
                setCommentRefId('');
            }} />
            <Button icon="confirm" text="Confirm" intent="primary" onClick={() => {
                logCommentService
                    .upd(commentRefId, { content: editSource })
                    .then(() => {
                        setMode(MODE.VIEW);
                        setEditSource('');
                        setCommentRefId('');
                        setCommentsFlag(!commentsFlag);
                    });
            }} />
        </ButtonGroup>
    );
    const partialEditAction = (
        <ButtonGroup>
            <Button icon="undo" text="Cancel" onClick={() => {
                setMode(MODE.VIEW);
                setEditSource('');
                setCommentRefId('');
            }} />
            <Button icon="confirm" text="Confirm" intent="primary" onClick={() => {
                const source = replaceCodeFromSource(logData.content, posData, editSource);
                logService
                    .upd(params.id, { content: source })
                    .then(() => {
                        setMode(MODE.VIEW);
                        setEditSource('');
                        setLogFlag(!logFlag);
                        setPosData(null);
                    });
            }} />
        </ButtonGroup>
    );
    
    return (
        <AppFrame
            actions={
                (mode === MODE.APPEND && appendAction) ||
                (mode === MODE.EDIT && editAction) ||
                (mode === MODE.COMMENT && commentAction) ||
                (mode === MODE.COMMENT_EDIT && commentEditAction) ||
                (mode === MODE.PARTIAL_EDIT && partialEditAction) ||
                viewAction
            }
        >
            {
                logData && logCommentsData &&
                <div className={names(styles.container)}>
                    <div className={styles.logContentBox}>
                        <div className={styles.logContent}>
                            <MarkdownPreview source={logData.content} selectAble onSelect={
                                pos => {
                                    const partial = sliceCodeFromSource(logData.content, pos);
                                    setEditSource(partial);
                                    setPosData(pos);
                                    setMode(MODE.PARTIAL_EDIT);
                                }
                            } />
                        </div>
                    </div>
                    <div className={styles.commentBox}>
                        <div className={styles.commentContent}>
                            <LogComments
                                list={logCommentsData}
                                onRequestUpdate={c => {
                                    setEditSource(c.content);
                                    setCommentRefId(c.id);
                                    setMode(MODE.COMMENT_EDIT);
                                }}
                                onRequestDelete={cid => {
                                    if (!window.confirm('Please confirm DELETE item.')) return;
                                    logCommentService.del(cid)
                                        .then(() => {
                                            setCommentsFlag(!commentsFlag);
                                        })
                                        .catch(err => {
                                            alert(err.message);
                                        });
                                }}
                            />
                        </div>
                    </div>
                </div>
            }
            {
                mode !== MODE.VIEW && <div className={names(styles.editorOuter)}>
                    <div className={styles.editorInner}>
                        <Editor
                            value={editSource}
                            onChange={val => setEditSource(val)}
                        />
                    </div>
                </div>
            }
        </AppFrame>
    );
}