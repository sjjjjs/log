import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, Classes, Switch, Drawer, Position, TextArea
} from '@blueprintjs/core';
import styles from './logDetail.module.css';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import logCommentService from 'service/logComment';
import LogComments from 'component/logComments';
import { AppToaster } from 'util/toaster';
import MarkdownPreview from 'component/markdownPreview';
import { sliceCodeFromSource, replaceCodeFromSource } from 'util/sourcePosUtil';

function PartialEditDrawer(props) {
    const { isOpen = false, onClose, value, onChange } = props;
    return (
        <Drawer
            icon="annotation"
            autoFocus
            hasBackdrop
            isOpen={isOpen}
            position={Position.RIGHT}
            size={Drawer.SIZE_STANDARD}
            onClose={onClose}
        >
            <div className={Classes.DRAWER_BODY}>
                <div className={Classes.DIALOG_BODY}>
                    <p>
                        <strong>
                            局部编辑
                        </strong>
                    </p>
                    <TextArea
                        fill
                        large
                        growVertically
                        value={value}
                        onChange={evt => onChange(evt.target.value)}
                        className={Classes.MONOSPACE_TEXT}
                    />
                </div>
            </div>
        </Drawer>
    );
}

function PageNavigator(props) {
    const h = useHistory();
    const params = useParams();
    const { partialEdit = false, setPartialEdit } = props;
    return (
        <Navbar className={Classes.DARK}>
            <div style={{width: '640px', margin: 'auto'}}>
                <NavbarGroup align="left">
                    <Button
                        onClick={() => h.goBack()}
                        icon="chevron-left"
                        minimal
                    >返回</Button>
                </NavbarGroup>
                <NavbarGroup align="right">
                    <Button minimal onClick={() => h.push(`/log.comment.createOrEdit/${params.id}`)}>评论</Button>
                    <Button style={{marginLeft: '5px'}} minimal onClick={() => h.push(`/log.createOrEdit/${params.id}`)}>修改</Button>
                    <Button style={{marginLeft: '5px'}} intent="danger" minimal onClick={() => {
                        if (!window.confirm("确认删除？")) return;
                        logService.del(params.id)
                        .then(() => {
                            AppToaster.show({ timeout: 2000, message: '删除成功', intent: 'success' });
                            h.goBack();
                        })
                        .catch(err => {
                            alert(err.message);
                        });
                    }}>删除</Button>
                    <Switch label="局部修改" checked={partialEdit} onChange={setPartialEdit} />
                </NavbarGroup>
            </div>
        </Navbar>
    );
}

function LogDetail(props) {
    const params = useParams();
    const [ flag, setFlag ] = useState(false);
    const [ logData, setLogData ] = useState(null);
    const [ logCommentsData, setLogCommentsData ] = useState([]);
    const [ partialEdit, setPartialEdit ] = useState(false);
    const [ isOpenPartialEditDrawer, setIsOpenPartialEditDrawer ] = useState(false);
    const [ partialSource, setPartialSource ] = useState('');
    const [ posData, setPosData ] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const logInfo = await logService.get(params.id);
            const logCommentsInfo = await logCommentService.all(params.id);
            setLogData(logInfo);
            setLogCommentsData(logCommentsInfo);
        }
        fetchData();
    }, [ params.id, flag ]);
    return (
        <AppFrame header={<PageNavigator partialEdit={partialEdit} setPartialEdit={() => setPartialEdit(!partialEdit)} />}>
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

export const component = LogDetail;
export const path = '/log.detail/:id';