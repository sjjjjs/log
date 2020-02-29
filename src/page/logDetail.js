import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Button, Classes, Switch, Position, Code, Popover, Menu, MenuItem, NavbarDivider
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

const NavigationActions = () => {
    const h = useHistory();
    const params = useParams();
    return (
        < >
            <Popover content={
                <Menu>
                    <MenuItem
                        icon="annotation" text="修改内容" label={<><Code>⌘</Code> + <Code>e</Code></>}
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
                <Button icon="cog" minimal />
            </Popover>
        </>
    );
};

export default function LogDetail() {
    const params = useParams();
    const h = useHistory();
    const [flag, setFlag] = useState(false);
    const [logData, setLogData] = useState(null);
    const [logCommentsData, setLogCommentsData] = useState([]);
    const [partialEdit, setPartialEdit] = useState(false);
    const [isOpenPartialDrawerEditor, setIsOpenPartialDrawerEditor] = useState(false);
    const [isOpenCommentDrawerEditor, setIsOpenCommentDrawerEditor] = useState(false);
    const [partialSource, setPartialSource] = useState('');
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
                    title={<Button minimal icon="home" onClick={() => h.push(getUrlUtil.getLogUrl())}>日志首页</Button>}
                    actions={
                        < >
                        <NavigationActions />
                        <NavbarDivider />
                        <Switch style={{ marginBottom: 0, marginLeft: 5, marginRight: 5 }}
                            label={<span>片段编辑</span>} checked={partialEdit} onChange={() => setPartialEdit(!partialEdit)}/>
                        </>
                    }
                />
            }
            footer={
                <NormalFooter>
                    <Button
                        icon="comment"
                        minimal
                        onClick={() => {
                            setCommentSource('');
                            setIsOpenCommentDrawerEditor(true);
                            setCommentRefId('');
                        }}
                    >评论</Button>
                    <div className={Classes.TEXT_MUTED}>
                        {logData && <Ago time={logData.time} />}
                        <span> · </span>
                        <span>{logCommentsData ? logCommentsData.length : 0} 评论</span>
                    </div>
                </NormalFooter>
            }
        >
            <div className={styles.container}>
                {
                    logData && <div className={styles.logContentBox}>
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
                }

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
            <DrawerEditor
                title="日志片段"
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