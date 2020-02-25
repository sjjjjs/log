import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button, Classes
} from '@blueprintjs/core';
import styles from './appender.module.css';
import LogAppender from 'component/logAppender';
import AppFrame from 'component/appFrame';

function Navigatior() {
    const h = useHistory();
    return (
        <Navbar className={Classes.DARK}>
            <NavbarGroup align="left">
                <Button
                    onClick={() => h.replace('/log.list')}
                    icon="chevron-left"
                    minimal
                >返回日志</Button>
                <NavbarDivider />
                <NavbarHeading><small>记住每个精彩瞬间！</small></NavbarHeading>
            </NavbarGroup>
        </Navbar>
    );
}

function Appender() {
    return (
        <AppFrame header={<Navigatior />}>
            <div className={styles.container}>
                <LogAppender />
            </div>
        </AppFrame>
    );
}

export const component = Appender;
export const path = '/log.create';