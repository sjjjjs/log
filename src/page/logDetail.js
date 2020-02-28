import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Navbar, NavbarGroup, Button, Classes
} from '@blueprintjs/core';
import styles from './logDetail.module.css';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import logCommentService from 'service/logComment';
import LogComments from 'component/logComments';
import { AppToaster } from 'util/toaster';
import MarkdownPreview from 'component/markdownPreview';

function PageNavigator() {
    const h = useHistory();
    const params = useParams();
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
                </NavbarGroup>
            </div>
        </Navbar>
    );
}

function LogDetail(props) {
    const params = useParams();
    const [ logData, setLogData ] = useState(null);
    const [ logCommentsData, setLogCommentsData ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const logInfo = await logService.get(params.id);
            const logCommentsInfo = await logCommentService.all(params.id);
            setLogData(logInfo);
            setLogCommentsData(logCommentsInfo);
        }
        fetchData();
    }, [ params.id ]);
    return (
        <AppFrame header={<PageNavigator />}>
            <div className={styles.container}>
                {
                    logData && <div className={styles.logContentBox}>
                        <div className={styles.logContent}>
                            <MarkdownPreview source={logData.content} selectAble onSelect={
                                pos => {
                                    console.log('pos', pos);
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
        </AppFrame>
    );
}

export const component = LogDetail;
export const path = '/log.detail/:id';