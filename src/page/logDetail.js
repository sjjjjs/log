import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Button, Classes, Switch, Position, Code, Popover, Menu, MenuItem, ButtonGroup
} from '@blueprintjs/core';
import styles from './logDetail.module.css';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import logCommentService from 'service/logComment';
import LogComments from 'component/logComments';
import { AppToaster } from 'util/toaster';
import MarkdownPreview from 'component/markdownPreview';
import { sliceCodeFromSource, replaceCodeFromSource } from 'util/sourcePosUtil';
import NormalNavigator from 'component/normalNavigator';
import NormalFooter from 'component/normalFooter';
import getUrlUtil from 'util/getUrlUtil';
import Ago from 'component/timeAgo';
import DrawerEditor from 'component/drawerEditor';
import { noop } from 'util/commonUtil';
import { DatePicker } from '@blueprintjs/datetime';
import dayjs from 'dayjs';

const NavigationActions = (props) => {
    const h = useHistory();
    const params = useParams();
    const { onAppendRequest = noop } = props;
    return (
        < >
            <ButtonGroup>
                <Popover content={
                    <DatePicker
                        showActionsBar
                        shortcuts
                        highlightCurrentDay
                        onChange={evt => {
                            h.push(getUrlUtil.getAliaUrl(dayjs(evt).format('YYYYMMDD')))
                        }}
                    />
                }>
                    <Button minimal icon="book" />
                </Popover>
                <Popover content={
                    <Menu>
                        <MenuItem
                            icon="add" text="追加片段" label={<><Code>⌘</Code> + <Code>a</Code></>}
                            onClick={onAppendRequest}
                        />
                        <MenuItem
                            icon="annotation" text="编辑全部" label={<><Code>⌘</Code> + <Code>e</Code></>}
                            onClick={() => h.push(getUrlUtil.getLogCreateUrl(params.id))}
                        />
                        <Menu.Divider />
                        <MenuItem
                            icon="delete" intent="danger" text="删除日志" label={<><Code>⌘</Code> + <Code>d</Code></>}
                            onClick={() => {
                                if (!window.confirm("确认删除？")) return;
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
                } position={Position.BOTTOM}>
                    <Button minimal icon="cog" />
                </Popover>
            </ButtonGroup>
        </>
    );
};

export default function LogDetail() {
    const params = useParams();
    const [flag, setFlag] = useState(false);
    const [logData, setLogData] = useState(null);
    const [logCommentsData, setLogCommentsData] = useState([]);
    const [partialEdit, setPartialEdit] = useState(false);
    const [isOpenPartialDrawerEditor, setIsOpenPartialDrawerEditor] = useState(false);
    const [isOpenAppendDrawerEditor, setIsOpenAppendDrawerEditor] = useState(false);
    const [isOpenCommentDrawerEditor, setIsOpenCommentDrawerEditor] = useState(false);
    const [partialSource, setPartialSource] = useState('');
    const [appendSource, setAppendSource] = useState('');
    const [commentSource, setCommentSource] = useState('');
    const [commentRefId, setCommentRefId] = useState('');
    const [posData, setPosData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const logInfo = await logService.get(params.id);
            const logCommentsInfo = await logCommentService.all(params.id);
            setLogData(logInfo);
            setLogCommentsData(logCommentsInfo);
        }
        fetchData();
    }, [params.id, flag]);
    return (
        <AppFrame
            header={
                <NormalNavigator
                    showBack
                    title={logData && <span className={Classes.TEXT_MUTED}><Ago time={logData.time} /></span>}
                    actions={
                        <NavigationActions onAppendRequest={() => setIsOpenAppendDrawerEditor(true)} />
                    }
                />
            }
            footer={
                logData && logCommentsData && <NormalFooter>
                    <div className={Classes.TEXT_MUTED}>
                        <Button
                            icon="comment"
                            minimal
                            onClick={() => {
                                setCommentSource('');
                                setIsOpenCommentDrawerEditor(true);
                                setCommentRefId('');
                            }}
                        >
                            评论<span>&nbsp;({logCommentsData ? logCommentsData.length : 0})</span>
                        </Button>
                    </div>
                    <div className={styles.footerActions}>
                       
                        <Switch style={{ marginLeft: 5, marginBottom: 0 }}
                            label={<span>编辑</span>} checked={partialEdit} onChange={() => setPartialEdit(!partialEdit)} />
                    </div>
                </NormalFooter>
            }
        >
            {
                logData && logCommentsData &&
                <div className={styles.container}>
                    <div className={styles.logContentBox}>
                        <div className={styles.logContent}>
                            <MarkdownPreview source={logData.content} selectAble={partialEdit} onSelect={
                                pos => {
                                    const partial = sliceCodeFromSource(logData.content, pos);
                                    setIsOpenPartialDrawerEditor(true);
                                    setPartialSource(partial);
                                    setPosData(pos);
                                }
                            } />
                        </div>
                    </div>
                    <div className={styles.commentBox}>
                        <div className={styles.commentContent}>
                            <LogComments
                                list={logCommentsData}
                                onRequestUpdate={c => {
                                    setCommentSource(c.content);
                                    setIsOpenCommentDrawerEditor(true);
                                    setCommentRefId(c.id);
                                }}
                                onRequestDelete={cid => {
                                    if (!window.confirm('你确定将此条记录删除吗？')) return;
                                    logCommentService.del(cid)
                                        .then(() => {
                                            AppToaster.show({
                                                timeout: 2000,
                                                message: '删除成功',
                                                intent: 'success'
                                            });
                                            setFlag(!flag);
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
            <DrawerEditor
                title="编辑片段"
                isOpen={isOpenPartialDrawerEditor}
                onClose={() => {
                    setIsOpenPartialDrawerEditor(false);
                }}
                onConfirm={() => {
                    setIsOpenPartialDrawerEditor(false);
                    const source = replaceCodeFromSource(logData.content, posData, partialSource);
                    logService
                        .upd(logData.id, { content: source })
                        .then(() => {
                            setFlag(!flag);
                            setPartialEdit(false);
                        });
                }}
                value={partialSource}
                onChange={val => setPartialSource(val)}
            />
            <DrawerEditor
                title="追加片段"
                isOpen={isOpenAppendDrawerEditor}
                onClose={() => {
                    setIsOpenAppendDrawerEditor(false);
                }}
                onConfirm={() => {
                    setIsOpenAppendDrawerEditor(false);
                    logService
                        .upd(logData.id, { content: logData.content + '\n\n' + appendSource })
                        .then(() => {
                            setFlag(!flag);
                            setPartialEdit(false);
                        });
                }}
                value={appendSource}
                onChange={val => setAppendSource(val)}
            />
            <DrawerEditor
                title={`${commentRefId ? '修改' : '发布'}评论`}
                isOpen={isOpenCommentDrawerEditor}
                onClose={() => {
                    setIsOpenCommentDrawerEditor(false);
                }}
                onConfirm={() => {
                    setIsOpenCommentDrawerEditor(false);
                    let process;
                    if (commentRefId) {
                        process = logCommentService
                            .upd(commentRefId, { content: commentSource });
                    } else {
                        process = logCommentService
                            .add(logData.id, { content: commentSource });
                    }
                    process
                        .then(() => {
                            setFlag(!flag);
                        });
                }}
                value={commentSource}
                onChange={val => setCommentSource(val)}
            />
        </AppFrame>
    );
}