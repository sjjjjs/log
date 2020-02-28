import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Classes
} from '@blueprintjs/core';
import styles from './log.module.css';
import LogItem from 'component/logItem';
import AppFrame from 'component/appFrame';
import logService from 'service/log';

function Navigatior() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <div style={{width: '640px', margin: 'auto'}}>
                <NavbarGroup align="left">
                    <NavbarHeading>
                        <Link className={Classes.Link} to="/log">英雄笔记</Link>
                    </NavbarHeading>
                    <NavbarDivider />
                    <NavbarHeading>日志</NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align="right">
                    <Button onClick={() => h.push('/log.createOrEdit')}>创建记录</Button>
                </NavbarGroup>
            </div>
        </Navbar>
    );
}

function Log() {
    const [logs, setlogs] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await logService.all();
            setlogs(list);
        }
        fetch();
    }, []);
    return (
        <AppFrame header={<Navigatior />}>
            <div className={styles.container}>
                { logs.map(message => (
                    <LogItem key={message.id} id={message.id} date={message.time}>{message.content}</LogItem>
                ))}
            </div>
        </AppFrame>
    );
}

export const component = Log;
export const path = '/log';
export const exact = true;