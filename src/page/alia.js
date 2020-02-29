
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppFrame from 'component/appFrame';
import NormalNavigator from 'component/normalNavigator';
import logService from 'service/log';
import textToIdMapService from 'service/textToIdMap';
import styles from './alia.module.css';
import { Button, NonIdealState, Tag, Spinner } from '@blueprintjs/core';
import { AppToaster } from 'util/toaster';

const createAndLink = async (text) => {
    let success = true;
    let lid;
    try {
        lid = await logService.add({ content: text + '\n---\n' });
        await textToIdMapService.link(text, lid);
    } catch(err) {
        AppToaster.show({ timeout: 2000, message: err.message, intent: 'danger' });
        success = false;
    }
    return success ? lid : null;
}

function Log() {
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
            const map = await textToIdMapService.findMapByText(text);
            if (map) {
                setIsTextExist(true);
                const log = await logService.get(map.lid);
                if (log) {
                    setIsLogExist(true);
                    h.replace(`/log.detail/${log.id}`);
                    return;
                }
            }
            setIsTextExistInit(true);
            setIsLogExistInit(true);
        }
        validate();
    }, [ text, h ]);

    let icon = '';
    let description = '';
    let action = null;

    if (!isValidText) {
        icon="error";
        description = <span><Tag minimal large >{text}</Tag> 格式不正确</span>;
        action = null;
    } else {
        if (!isTextExist) {
            icon="info-sign";
            description = <span><Tag minimal large >{text}</Tag> 尚未关联日志</span>;
            action = <Button onClick={() => createAndLink(text).then(lid => lid && h.replace(`/log.detail/${lid}`))} intent="primary" icon="confirm">新建并关联</Button>;
        } else {
            if (!isLogExist) {
                icon="warning-sign";
                description = <span><Tag minimal large >{text}</Tag> 对应的日志不存在</span>;
                action = <Button onClick={() => createAndLink(text).then(lid => lid && h.replace(`/log.detail/${lid}`))} intent="primary" icon="confirm">新建并关联</Button>;
            }
        }
    }

    return (
        <AppFrame header={
            <NormalNavigator showBack title="正在检查" />
        }>
            <div className={styles.container}>
                {
                    !isInit && <Spinner />
                }
                {
                    isInit && <NonIdealState
                        title="温馨提示"
                        description={description}
                        icon={icon}
                        action={action}
                    >
                    </NonIdealState>
                }
            </div>
        </AppFrame>
    );
}

export const component = Log;
export const path = '/alia/:text';