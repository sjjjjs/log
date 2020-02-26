import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Classes
} from '@blueprintjs/core';
import store from 'store/index';
import styles from './log.module.css';
import LogItem from 'component/logItem';
import AppFrame from 'component/appFrame';

function Navigatior() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <NavbarGroup align="left">
                <NavbarHeading>
                    <Link to="/">英雄笔记</Link>
                </NavbarHeading>
                <NavbarDivider />
                <NavbarHeading>日志</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align="right">
                <Button onClick={() => h.push('/log.create')} icon="add">创建记录</Button>
            </NavbarGroup>
        </Navbar>
    );
}

function Log() {
    const [logMessages, setLogMessages] = useState([]);
    useEffect(() => {
        async function fetch() {
            const list = await store.logMessages.orderBy('time').toArray();
            setLogMessages(list.reverse());
        }
        fetch();
    }, []);
    return (
        <AppFrame header={<Navigatior />} footer={<span>草木皆兵</span>}>
            <div className={styles.container}>
                { logMessages.map(message => (
                    <LogItem key={message.id} date={message.time}>{message.content}</LogItem>
                ))}
            </div>
        </AppFrame>
    );
}

export const component = Log;
export const path = '/log';
export const exact = true;