import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Button, Classes, Switch, Drawer, Position, Icon, Code, H5, Popover, Menu, MenuItem, NavbarDivider
} from '@blueprintjs/core';
import styles from './logDetail.module.css';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import logCommentService from 'service/logComment';
import LogComments from 'component/logComments';
import { AppToaster } from 'util/toaster';
import MarkdownPreview from 'component/markdownPreview';
import { sliceCodeFromSource, replaceCodeFromSource } from 'util/sourcePosUtil';
import MarkdownEditor from 'component/markdownEditor';
import { noop } from 'util/commonUtil';
import NormalNavigator from 'component/normalNavigator';
import NormalFooter from 'component/normalFooter';
import getUrlUtil from 'util/getUrlUtil';
import Ago from 'component/timeAgo';

function PartialEditDrawer(props) {
    const {
        isOpen = false,
        onClose = noop,
        value = '',
        onChange = noop,
        onConfirm = noop
    } = props;
    return (
        <Drawer
            icon="annotation"
            autoFocus
            hasBackdrop
            isOpen={isOpen}
            position={Position.BOTTOM}
            size={Drawer.SIZE_LARGE}
            onClose={onClose}
            onConfirm={onConfirm}
        >
            <div className={Classes.DRAWER_BODY}>
                <div style={{ backgroundColor: '#ebf1f5', height: '100%' }}>
                    <div className={Classes.DIALOG_HEADER}>
                        <div style={{
                            display: 'flex',
                            width: 640,
                            margin: 'auto',
                            alignItems: 'center'
                        }}>
                            <H5>局部编辑</H5>
                            <Button
                                minimal
                                icon="confirm"
                                intent="primary"
                                className={Classes.DIALOG_CLOSE_BUTTON}
                                onClick={onConfirm}
                            >
                                提交
                            </Button>
                        </div>
                    </div>
                    <div className={Classes.DIALOG_BODY}>
                        <MarkdownEditor
                            value={value}
                            onChange={val => onChange(val)}
                        />
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

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
    const [isOpenPartialEditDrawer, setIsOpenPartialEditDrawer] = useState(false);
    const [partialSource, setPartialSource] = useState('');
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
                        label="局部修改" checked={partialEdit} onChange={() => setPartialEdit(!partialEdit)}/>
                        </>
                    }
                />
            }
            footer={
                <NormalFooter>
                    <Button icon="comment" minimal onClick={() => h.push(getUrlUtil.getLogCommentCreateUrl(params.id))}>评论</Button>
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
                                    setIsOpenPartialEditDrawer(true);
                                    setPartialSource(partial);
                                    setPosData(pos);
                                }
                            } />
                        </div>
                    </div>
                }

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <LogComments list={logCommentsData} id={params.id} />
                    </div>
                </div>
            </div>
            <PartialEditDrawer
                isOpen={isOpenPartialEditDrawer}
                onClose={() => {
                    setIsOpenPartialEditDrawer(false);
                }}
                onConfirm={() => {
                    setIsOpenPartialEditDrawer(false);
                    const source = replaceCodeFromSource(logData.content, posData, partialSource);
                    logService
                        .upd(logData.id, { content: source })
                        .then(() => setFlag(!flag));
                }}
                value={partialSource}
                onChange={val => setPartialSource(val)}
            />
        </AppFrame>
    );
}