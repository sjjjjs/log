import React from 'react';
import styles from './setting.module.css';
import AppFrame from 'component/appFrame';
import { RadioGroup, Radio, FormGroup, InputGroup, Card } from '@blueprintjs/core';
import { useState } from 'react';

const HERO_BOOK_SETTING_DATA_SOURCE = 'HERO_BOOK_SETTING_DATA_SOURCE';
const HERO_BOOK_SETTING_DATA_REMOTE_URL = 'HERO_BOOK_SETTING_DATA_REMOTE_URL';
const HERO_BOOK_SETTING_DATA_REMOTE_TOKEN = 'HERO_BOOK_SETTING_DATA_REMOTE_TOKEN';
const DATA_SOURCE_TYPES = {
    LOCAL: '1',
    REMOTE: '2'
};

export default function SettingPage(props) {
    const curr = window.localStorage.getItem(HERO_BOOK_SETTING_DATA_SOURCE);
    const ru = window.localStorage.getItem(HERO_BOOK_SETTING_DATA_REMOTE_URL);
    const rt = window.localStorage.getItem(HERO_BOOK_SETTING_DATA_REMOTE_TOKEN);
    const [value, setValue] = useState(curr || '');
    const [remoteUrl, setRemoteUrl] = useState(ru || '');
    const [remoteToken, setRemoteToken] = useState(rt || '');
    return (
        <AppFrame>
            <div className={styles.container}>
            <RadioGroup
                label="持久化方案："
                selectedValue={value}
                onChange={evt => {
                    const v = evt.target.value;
                    window.localStorage.setItem('HERO_BOOK_SETTING_DATA_SOURCE', v);
                    setValue(v);
                }}
            >
                <Radio label="本地数据库" value={DATA_SOURCE_TYPES.LOCAL} />
                <Radio label="远程数据库" value={DATA_SOURCE_TYPES.REMOTE} />
            </RadioGroup>
            {
                value === DATA_SOURCE_TYPES.REMOTE && <Card className={styles.indent}>
                    <FormGroup
                        inline
                        label="接口地址"
                    >
                        <InputGroup placeholder="请输入接口地址" value={remoteUrl}
                        onChange={evt => {
                            const v = evt.target.value;
                            window.localStorage.setItem(HERO_BOOK_SETTING_DATA_REMOTE_URL, v);
                            setRemoteUrl(v);
                        }} />
                    </FormGroup>
                    <FormGroup
                        inline
                        label="校验信息"
                    >
                        <InputGroup placeholder="请输入校验信息" value={remoteToken}
                        onChange={evt => {
                            const v = evt.target.value;
                            window.localStorage.setItem(HERO_BOOK_SETTING_DATA_REMOTE_TOKEN, v);
                            setRemoteToken(v);
                        }} />
                    </FormGroup>
                </Card>
            }
            </div>
        </AppFrame>
    );
}