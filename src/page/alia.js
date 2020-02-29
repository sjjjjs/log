
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppFrame from 'component/appFrame';
import NormalNavigator from 'component/normalNavigator';
import logService from 'service/log';
import textToIdMapService from 'service/textToIdMap';
import styles from './alia.module.css';
import { Button, NonIdealState, Tag, Spinner } from '@blueprintjs/core';
import { AppToaster } from 'util/toaster';
import getUrlUtil from 'util/getUrlUtil';
import { delay } from 'util/commonUtil';

const createAndLink = async (text) => {
    let success = true;
    let lid;
    let t = '';
    if (text === 'm') { t = '美好的一天！' }
    try {
        lid = await logService.add({ content: t || text + '\n---\n' });
        await textToIdMapService.link(text, lid);
    } catch(err) {
        AppToaster.show({ timeout: 2000, message: err.message, intent: 'danger' });
        success = false;
    }
    return success ? lid : null;
}
const createAndUpdateLink = async (text) => {
    let success = true;
    let lid;
    let t = '';
    if (text === 'm') { t = '美好的一天！' }
    try {
        lid = await logService.add({ content: t || text + '\n---\n' });
        await textToIdMapService.relink(text, lid);
    } catch(err) {
        AppToaster.show({ timeout: 2000, message: err.message, intent: 'danger' });
        success = false;
    }
    return success ? lid : null;
}

export default function Alia() {
    const TEXT_REG = /^\S{1,100}$/;
    const params = useParams();
    const h = useHistory();
    const { text = '' } = params;
    const isValidText = text.match(TEXT_REG);
    const [ isTextExist, setIsTextExist ] = useState(false);
    const [ isTextExistInit, setIsTextExistInit ] = useState(false);
    const [ isLogExist, setIsLogExist ] = useState(false);
    const [ isLogExistInit, setIsLogExistInit ] = useState(false);
    const isInit = isTextExistInit && isLogExistInit;

    useEffect(() => {
        async function validate() {
            await delay(350);
            const map = await textToIdMapService.findMapByText(text);
            if (map) {
                setIsTextExist(true);
                const log = await logService.get(map.lid);
                if (log) {
                    setIsLogExist(true);
                    h.replace(getUrlUtil.getLogDetailUrl(log.id));
                    return;
                }
            }
            setIsTextExistInit(true);
            setIsLogExistInit(true);
        }
        validate();
    }, [ text, h ]);

    const title = <Tag intent="warning" minimal large >{text}</Tag>;
    let icon = '';
    let description = '';
    let action = null;

    if (!isValidText) {
        icon="error";
        description = "格式不正确";
        action = null;
    } else {
        if (!isTextExist) {
            icon = "info-sign";
            description = "此关键字尚未关联任何日志";
            action = <Button minimal onClick={() => createAndLink(text).then(lid => lid && h.replace(getUrlUtil.getLogDetailUrl(lid)))} intent="primary">新建日志并关联</Button>;

            if (text === 'm') {
                icon = "play";
                description = "欢迎使用，开始创建你的第一篇日志吧！";
                action = <Button minimal onClick={() => createAndLink(text).then(lid => lid && h.replace(getUrlUtil.getLogDetailUrl(lid)))} intent="primary">开启日志</Button>;
            }
        } else {
            if (!isLogExist) {
                icon = "warning-sign";
                description = "哎呀，首页的日志被删除了！";
                action = <Button minimal onClick={() => createAndUpdateLink(text).then(lid => lid && h.replace(getUrlUtil.getLogDetailUrl(lid)))} intent="primary">新建日志并重新关联</Button>;

                if (text === 'm') {
                    icon = "warning-sign";
                    description = "日志消失了，重新关联吧！";
                    action = <Button minimal onClick={() => createAndUpdateLink(text).then(lid => lid && h.replace(getUrlUtil.getLogDetailUrl(lid)))} intent="primary">新建日志并重新关联</Button>;
                }
            }
        }
    }

    return (
        <AppFrame header={
            <NormalNavigator
                showBack={text !== 'm'}
                title={<Button minimal icon="home" onClick={() => h.push(getUrlUtil.getLogUrl())}>日志首页</Button>}
            />
        }>
            <div className={styles.container}>
                {
                    !isInit && <Spinner />
                }
                {
                    isInit && <NonIdealState
                        icon={icon}
                        title={title}
                        action={action}
                    >
                    </NonIdealState>
                }
            </div>
        </AppFrame>
    );
}
