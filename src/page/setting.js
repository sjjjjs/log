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
                label="Database"
                selectedValue={value}
                onChange={evt => {
                    const v = evt.target.value;
                    window.localStorage.setItem('HERO_BOOK_SETTING_DATA_SOURCE', v);
                    setValue(v);
                }}
            >
                <Radio label="Local" value={DATA_SOURCE_TYPES.LOCAL} />
                <Radio label="Remote" value={DATA_SOURCE_TYPES.REMOTE} />
            </RadioGroup>
            {
                value === DATA_SOURCE_TYPES.REMOTE && <Card className={styles.indent}>
                    <FormGroup
                        inline
                        label="url"
                    >
                        <InputGroup placeholder="place input url" value={remoteUrl}
                        onChange={evt => {
                            const v = evt.target.value;
                            window.localStorage.setItem(HERO_BOOK_SETTING_DATA_REMOTE_URL, v);
                            setRemoteUrl(v);
                        }} />
                    </FormGroup>
                    <FormGroup
                        inline
                        label="validation"
                    >
                        <InputGroup placeholder="please input validation" value={remoteToken}
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