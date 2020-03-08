import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Popover, Position } from '@blueprintjs/core';
import { DatePicker } from '@blueprintjs/datetime';
import styles from './log.module.css';
import LogItem from 'component/logItem';
import AppFrame from 'component/appFrame';
import logService from 'service/log';
import getUrlUtil from 'util/getUrlUtil';
import dayjs from 'dayjs';

export default function Log() {
    const h = useHistory();
    const [logs, setlogs] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await logService.all();
            setlogs(list);
        }
        fetch();
    }, []);
    return (
        <AppFrame actions={
            <Popover content={
                <DatePicker
                    showActionsBar
                    shortcuts
                    highlightCurrentDay
                    onChange={evt => {
                        evt && h.push( getUrlUtil.getAliaUrl(dayjs(evt).format('YYYYMMDD')));
                    }}
                />
            } position={Position.BOTTOM_RIGHT}>
                <Button text="Daily" minimal rightIcon="caret-down" />
            </Popover>
        }>
            <div className={styles.container}>
                {
                    logs.map(message => (
                        <LogItem
                            key={message.id}
                            id={message.id}
                            date={message.time}
                        >{message.content}</LogItem>
                    ))
                }
            </div>
        </AppFrame>
    );
}
